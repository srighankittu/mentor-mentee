const mongoose = require("mongoose");

const menteeSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  isStudent: { type: Boolean, required: true },
});

module.exports = mongoose.model("Mentee", menteeSchema);
