const express = require("express");
const cors = require("cors");
const passport = require("passport");
const localStrategy = require("passport-local");
const passportJWT = require("passport-jwt");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const format = require("pg-format");

const db = require("./db");

const app = express();

const userAuthRoutes = require("./routes/userAuth");
const userInfoRoutes = require("./routes/userInfo");

const JWTStrategy = passportJWT.Strategy;

app.use(cors({ credentials: true, origin: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIESECRET));

app.use(passport.initialize());

const userCookieExtractor = (req) => {
  let token = null;
  if (req && req.signedCookies) {
    token = req.signedCookies["user_jwt"];
  }
  return token;
};

passport.use(
  "user_account_jwt",
  new JWTStrategy(
    {
      jwtFromRequest: userCookieExtractor,
      secretOrKey: process.env.JWTSECRET,
    },
    async (jwt_payload, done) => {
      const results = await db.query(
        format(
          "SELECT user_uid FROM user_account WHERE user_uid=%L",
          jwt_payload.user_uid
        )
      );
      const user = results.rows[0];
      if (user && user.user_uid === jwt_payload.user_uid) {
        return done(null, user);
      } else {
        return done(null, false, {
          message: "Token not matched",
        });
      }
    }
  )
);

// ----------------- AUTH MIDDLEWARE --------------------

app.use(
  "/api/user",
  passport.authenticate("user_account_jwt", {
    session: false,
  }),
  (req, res, next) => {
    console.log("USER AUTHENTICATED");
    return next();
  }
);

// ----------------- ROUTES --------------------

app.use("/api/auth/user", userAuthRoutes);
app.use("/api/user", userInfoRoutes);

// ---------------- ERROR HANDLING ----------------------

app.use((err, req, res, next) => {
  if (!err.message) err.message = "Something went wrong";
  console.log(err);
  res.status(200).json({
    status: "failed",
    message: err.message,
  });
});

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
