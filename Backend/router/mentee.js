// routes/mentee.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Mentee = require("../db/models/Mentee");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }
  try {
    const existingUser = await Mentee.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new Mentee({
      username,
      email,
      passwordHash: hashedPassword,
      isStudent: true,
    });
    await newUser.save();
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET || "your_jwt_secret",
      { expiresIn: "1h" },
    );
    res.cookie("token", token, { httpOnly: true });
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
