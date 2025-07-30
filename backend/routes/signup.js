const express = require("express");
const user = require("../models/user.model");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "failed",
        message: "Please Provide the missing EMail or Password",
      });
    }

    const hashedpswd = await bcrypt.hash(password, 10);

    let newUser = new userModel({ name, email, password: hashedpswd });
    await newUser.save();

    return res.status(200).json({
        status: "success",
        message: "User Registered.",
      });
  } catch (error) {
    console.log("Error : " , error)
  }
});

module.exports = router;
