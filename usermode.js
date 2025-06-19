const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitDB');


const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});




module.exports = mongoose.model('fruit', fruitSchema);