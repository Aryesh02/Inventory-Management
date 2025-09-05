const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  // res.send("Hello From Add.")
  try {
    const { comp_search } = req.body;

    if (comp_search == "Raspberry Pi 4") {
      return res.status(200).json({
        comp_search,
      });
    }
    return res.status(400).json({
      message: "No such component",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Please try after some time.",
    });
  }
});

module.exports = router;
