const router = require("express").Router();
const RoomBookIncome = require("../models/roomBookIncome"); //import model

router.route('/add').post((req, res) => {
    const roomId = req.body.roomId;
    const roomNumber = req.body.roomNumber;
    const amount = req.body.amount;
    
    const newRoomBookIncomeData = {
        roomId,
        roomNumber,
        amount,
    }

    const newRoomBookIncome = new RoomBookIncome(newRoomBookIncomeData);

    newRoomBookIncome.save()
           .then(() => res.json('New RoomBookIncome Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    RoomBookIncome.find().then((RoomBookIncomes)=>{
        res.json(RoomBookIncomes);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    let RoomBookIncomeID = req.params.id;
    const roomId = req.body.roomId;
    const roomNumber = req.body.roomNumber;
    const amount = req.body.amount;

    const updateRoomBookIncome = {roomId , roomNumber , amount };

    await RoomBookIncome.findByIdAndUpdate(RoomBookIncomeID , updateRoomBookIncome)
    .then(()=>{
        res.status(200).send({status : "RoomBookIncome Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let RoomBookIncomeID = req.params.id;

    await RoomBookIncome.findByIdAndDelete(RoomBookIncomeID)
    .then(()=>{
        res.status(200).send({status : "RoomBookIncome Collection has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});


module.exports = router;