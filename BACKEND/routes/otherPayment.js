const router = require("express").Router();
const OtherPayment = require("../models/otherPayment"); //import model

router.route('/add').post((req, res) => {
    const otherPaymentID = req.body.otherPaymentID;
    const otherPaymentCategory = req.body.otherPaymentCategory;
    const amount = req.body.amount;
    
    const newOtherPaymentData = {
        otherPaymentID,
        otherPaymentCategory,
        amount,
    }

    const newOtherPayment = new OtherPayment(newOtherPaymentData);

    newOtherPayment.save()
           .then(() => res.json('New OtherPayment Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    OtherPayment.find().then((OtherPayment)=>{
        res.json(OtherPayment);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    let OtherPaymentID = req.params.id;
    const otherPaymentID = req.body.otherPaymentID;
    const otherPaymentCategory = req.body.otherPaymentCategory;
    const amount = req.body.amount;

    const updateOtherPayment = {otherPaymentID , otherPaymentCategory , amount };

    await OtherPayment.findByIdAndUpdate(OtherPaymentID , updateOtherPayment)
    .then(()=>{
        res.status(200).send({status : "OtherPayment Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let OtherPaymentID = req.params.id;

    await OtherPayment.findByIdAndDelete(OtherPaymentID)
    .then(()=>{
        res.status(200).send({status : "OtherPayment Collection has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});


module.exports = router;