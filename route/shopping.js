const express = require('express');
const router = express.Router();
const ItemsModel = require('../models/shoppingItem');

router.get('/items', async (req, res) => {
    try {
        const allDocs = await ItemsModel.find({});
        res.json(allDocs);
    } catch (error) {
        res.json(error)
    }
})

router.post('/item', async(req, res) => {
    let newShoppingItem = new ItemsModel({
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemBought: req.body.itemBought
    });
    try {
        const response = await newShoppingItem.save();
        res.json({success: true, msg: `Item ${response.itemName} has beed added successfully`});
    } catch (error) {
        res.json(error)
    }
})

// findByIdAndUpdate, findOneAndUpdate, updateOne, updateMany
router.patch('/item/:id', async(req, res) => {
    try {
        const response = await ItemsModel.findByIdAndUpdate({_id: req.params.id}, {
            $set: {
                itemName: req.body.itemName,
                itemQuantity: req.body.itemQuantity
            }
        });
        res.json({success: true, msg: `Item ${response.itemName} modified successfully`});
    } catch (error) {
        res.json(error);
    }
})

router.delete('/item/:id', async(req, res) => {
    try {
        const response = await ItemsModel.findOneAndDelete({_id: req.params.id});
        res.json({success: true, msg: `Item ${response.itemName} deleted successfuly`});
    } catch (error) {
        res.json(error)
    }
})
module.exports = router;