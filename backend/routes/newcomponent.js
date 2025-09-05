const express = require('express');
const Inventory = require('../models/inventory.model')

const router = express.Router();



router.post("/", async (req, res) => {
    try {
        const {name, description, quantity, location} = req.body;

        const newComponent = new Inventory({
            name,
            description,
            total_quantity: quantity,
            available_quantity: quantity,
            location
        })

        await newComponent.save();

        res.status(201).json({message: "Component added successfully.", newComponent})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving item" });
    }
})

module.exports = router