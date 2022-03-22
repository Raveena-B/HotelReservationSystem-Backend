const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventIncomeSchema= new Schema({
    eventId: {
        type: String,
        required: true,
        trim: true
    }, 


    eventName : {
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

const eventIncome = mongoose.model('eventIncome', eventIncomeSchema);

module.exports = eventIncome;