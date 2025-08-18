const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
    // res.send("Hello From Add.")

    const {component_name, total_quantity, available_quantity} = req.body;

    return res.status(200).json({
        component_name, total_quantity, available_quantity
    })

})

module.exports = router