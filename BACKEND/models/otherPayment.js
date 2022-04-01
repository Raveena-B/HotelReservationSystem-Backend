const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const otherPaymentSchema= new Schema({
    otherPaymentID: {
        type: String,
        required: true,
        trim: true
    }, 


    otherPaymentCategory : {
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

const otherPayment = mongoose.model('otherPayment', otherPaymentSchema);

module.exports = otherPayment;