const router = require("express").Router();
const SupplierPayment = require("../models/supplierPayment"); //import model

router.route('/add').post((req, res) => {
    const supplierId = req.body.supplierId;
    const supplierName = req.body.supplierName;
    const supplierCategory = req.body.supplierCategory;
    const amount = req.body.amount;
    
    const newSupplierPaymentData = {
        supplierId,
        supplierName,
        supplierCategory,
        amount,
    }

    const newSupplierPayment = new SupplierPayment(newSupplierPaymentData);

    newSupplierPayment.save()
           .then(() => res.json('New SupplierPayments Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    SupplierPayment.find().then((SupplierPayment)=>{
        res.json(SupplierPayment);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    let SupplierPaymentID = req.params.id;
    const supplierId = req.body.supplierId;
    const supplierName = req.body.supplierName;
    const supplierCategory = req.body.supplierCategory;
    const amount = req.body.amount;

    const updateSupplierPayment = {supplierId , supplierName , supplierCategory,amount };

    await SupplierPayment.findByIdAndUpdate(SupplierPaymentID , updateSupplierPayment)
    .then(()=>{
        res.status(200).send({status : "SupplierPayment Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let SupplierPaymentID = req.params.id;

    await SupplierPayment.findByIdAndDelete(SupplierPaymentID)
    .then(()=>{
        res.status(200).send({status : "SupplierPayment Collection has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});


module.exports = router;