const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodIncomeSchema= new Schema({
    foodId: {
        type: String,
        required: true,
        trim: true
    }, 


    foodName : {
        type: String,
        required: true,
        trim: true
    },

    amount: {
        type: Number,
        required: true,
        trim: true
    }, 
    

});

const foodIncome = mongoose.model('foodIncome', foodIncomeSchema);

module.exports = foodIncome;