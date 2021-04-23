const mongoose = require('mongoose');
const ShoppingItemsSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    itemBought: {
        type: Boolean,
        required: true
    }
});

const ShoppingItemsModel = mongoose.model('Item', ShoppingItemsSchema);

module.exports = ShoppingItemsModel;