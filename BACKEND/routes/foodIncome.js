const router = require("express").Router();
const FoodIncome = require("../models/foodIncome"); //import model

router.route('/add').post((req, res) => {
    const foodId = req.body.foodId;
    const foodName = req.body.foodName;
    const amount = req.body.amount;
    
    const newFoodIncomeData = {
        foodId,
        foodName,
        amount,
    }

    const newFoodIncome = new FoodIncome(newFoodIncomeData);

    newFoodIncome.save()
           .then(() => res.json('New FoodIncome Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    FoodIncome.find().then((FoodIncomes)=>{
        res.json(FoodIncomes);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    let FoodIncomeID = req.params.id;
    const foodId = req.body.foodId;
    const foodName = req.body.foodName;
    const amount = req.body.amount;

    const updateFoodIncome = {foodId , foodName , amount };

    await FoodIncome.findByIdAndUpdate(FoodIncomeID , updateFoodIncome)
    .then(()=>{
        res.status(200).send({status : "FoodIncome Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let FoodIncomeID = req.params.id;

    await FoodIncome.findByIdAndDelete(FoodIncomeID)
    .then(()=>{
        res.status(200).send({status : "FoodIncome Collection has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});


module.exports = router;