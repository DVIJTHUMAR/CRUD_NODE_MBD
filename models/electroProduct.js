const mongoose = require('mongoose')
const electroProductSchema =  new mongoose.Schema({
    Pro_name: String ,
    price : Number,
    brand : String,
    description : String,
    color : String
})

const electroProductModel =  mongoose.model ("electroProduct", electroProductSchema);

module.exports = electroProductModel;



