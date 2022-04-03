const passport = require("passport");
const express = require("express");
const joi = require("joi");
const format = require("pg-format");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const db = require("../db");
const bcrypt = require("bcrypt");

const router = express.Router({ mergeParams: true });

const config = require("../config");

const userRegisterSchema = joi
  .object({
    user_full_name: joi.string().min(3).max(30).required(),
    user_email: joi
      .string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    repeat_password: joi.ref("password"),
  })
  .with("password", "repeat_password");

const userLoginSchema = joi.object({
  user_email: joi
    .string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

router.post(
  "/register",
  catchAsync(async (req, res, next) => {
    const data = req.body;

    const formData = {
      user_full_name: data.userFullName,
      user_email: data.userEmail,
      password: data.password,
      repeat_password: data.confirmPassword,
    };

    await userRegisterSchema.validateAsync(formData);

    const password_salt = bcrypt.genSaltSync(10);
    const password_hash = bcrypt.hashSync(formData.password, password_salt);
    const uid_results = await db.query(
      format(
        "INSERT INTO user_account (user_full_name, user_email, password_hash) VALUES (%L, %L, %L) RETURNING user_uid",
        formData.user_full_name,
        formData.user_email,
        password_hash
      )
    );
    jwt.sign(
      {
        user_uid: uid_results.rows[0].user_uid,
      },
      config.jwt.secret,
      config.jwt.options,
      (err, token) => {
        if (err) throw err;
        res.cookie("user_jwt", token, config.jwt.cookie);
        console.log("SUCCESS");
        res.status(200).json({
          status: "success",
          message: "Token made",
        });
      }
    );
  })
);

module.exports = router;
