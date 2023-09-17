const express= require('express');
const router =express.Router();

router.get("/",(req,res,next)=>
{
    res.status(200).json({
        message: "Handling GET in /orders"
    });
});

router.post("/",(req,res,next)=>
{
    const order={
        name: req.body.name,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message: "Handling POST in /orders",
        order: order
    });
});


router.get("/:orderID",(req,res,next)=>
{
    const id=req.params.orderID;
    if(id==='special')
    {
        res.status(200).json({
                message:" You discovered the ID in /orders"
        });
    }
    else
    {       
        res.status(200).json({
            message:" You passed an ID in / orders"
    });
    }
});




module.exports=router;


