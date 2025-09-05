const express = require('express');
const Inventory = require('../models/inventory.model')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const components = await Inventory.find();
        res.status(201).json({components});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching components" });
    }
})

module.exports = router;