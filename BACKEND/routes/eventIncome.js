const router = require("express").Router();
const EventIncome = require("../models/eventIncome"); //import model

router.route('/add').post((req, res) => {
    const eventId = req.body.eventId;
    const eventName = req.body.eventName;
    const amount = req.body.amount;
    
    const newEventIncomeData = {
        eventId,
        eventName,
        amount,
    }

    const newEventIncome = new EventIncome(newEventIncomeData);

    newEventIncome.save()
           .then(() => res.json('New EventIncome Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    EventIncome.find().then((EventIncomes)=>{
        res.json(EventIncomes);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    let EventIncomeID = req.params.id;
    const eventId = req.body.eventId;
    const eventName = req.body.eventName;
    const amount = req.body.amount;

    const updateEventIncome = {eventId , eventName , amount };

    await EventIncome.findByIdAndUpdate(EventIncomeID , updateEventIncome)
    .then(()=>{
        res.status(200).send({status : "EventIncome Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let EventIncomeID = req.params.id;

    await EventIncome.findByIdAndDelete(EventIncomeID)
    .then(()=>{
        res.status(200).send({status : "EventIncome Collection has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});


module.exports = router;