const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
    cartItems: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true    
    }
})

const Cart = mongoose.model('Cart', cartItemSchema);
module.exports = Cart;