const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomBookIncomeSchema= new Schema({
    roomId: {
        type: String,
        required: true,
        trim: true
    }, 


    roomNumber : {
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

const RoomBookIncome = mongoose.model('roomBookIncome', RoomBookIncomeSchema);

module.exports = RoomBookIncome;