const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierPaymentSchema= new Schema({
    supplierId: {
        type: String,
        required: true,
        trim: true
    }, 


    supplierName : {
        type: String,
        required: true,
        trim: true
    },

    supplierCategory : {
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

const supplierPayment = mongoose.model('supplierPayment', supplierPaymentSchema);

module.exports = supplierPayment;