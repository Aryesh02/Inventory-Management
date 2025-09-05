const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    total_quantity: { type: Number, required: true },
    available_quantity: { type: Number, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

const inventoryModel = mongoose.models.inventory || mongoose.model("inventory", inventorySchema);
module.exports = inventoryModel;
