const express = require("express");
const format = require("pg-format");

const catchAsync = require("../utils/catchAsync");

const router = express.Router({ mergeParams: true });

const db = require("../db");

router.get(
  "/info",
  catchAsync(async (req, res, next) => {
    console.log(req.user);
    const results = await db.query(
      format(
        "SELECT user_full_name, user_email FROM user_account WHERE user_uid=%L",
        req.user.user_uid
      )
    );
    res.status(200).json({
      status: "success",
      user: results.rows[0],
    });
  })
);

module.exports = router;
