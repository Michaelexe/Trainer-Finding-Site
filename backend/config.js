require("dotenv").config();

module.exports = {
  jwt: {
    secret: process.env.JWTSECRET,
    options: {
      audience: "https://www.mygymtrainer.in",
      expiresIn: "7d",
      issuer: "mygymtrainer.in",
    },
    cookie: {
      // CHANGE HTTPONLY TO TRUE AND SAMESITE TO TRUE
      httpOnly: false,
      sameSite: false,
      signed: true,
      secure: true,
    },
  },
};
