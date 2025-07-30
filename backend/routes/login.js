const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const userModel = require("../models/user.model");

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({
      status: "failed",
      message: "Please Provide the missing EMail or Password",
    });

  let existinguser = await userModel.findOne({ email });

  if (!existinguser) {
    return res.status(400).json({
      status: "failed",
      message: "User Not Found",
    });
  }

  const isMatch = await bcrypt.compare(password, existinguser.password);

  if (!isMatch) {
    return res.status(400).json({
      status: "failed",
      message: "Incorrect Password",
    });
  }

  const token = jwt.sign(
    { id : existinguser._id, email: existinguser.email },
    SECRET_KEY,
    { expiresIn: '6h' }
  )

  return res.status(200).json({
    status: "success",
    token,
    user : {
        name : existinguser.name,
        email: existinguser.email
    },
    message: "Login Successful.",
  });
});

module.exports = router;
