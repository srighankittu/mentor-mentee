const express = require("express");
const router = express.Router();
const Option = require("../db/models/Options");

// GET /options?category=Specialisation
router.get("/", async (req, res) => {
  try {
    const category = req.query.category;
    if (!category) {
      return res.status(400).json({ msg: "Category is required" });
    }
    const options = await Option.find();
    if (options.length === 0) {
      return res
        .status(404)
        .json({ msg: "No options found for the specified category" });
    }

    res.json(options);
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
