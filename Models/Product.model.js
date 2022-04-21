const mongoose = require('mongoose')
const Schema = mongoose.Schema
let _id = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');

const ProductSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
         required: true
    },
    productType: {
        type: String,
         required: true
    },
    Created_at: {
        type: Date,
         required: true
    },
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;