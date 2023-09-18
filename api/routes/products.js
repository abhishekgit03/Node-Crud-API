const express= require('express');
const router =express.Router();
const Product=require('../models/product')
const mongoose=require('mongoose');

router.get("/",(req,res,next)=>
{
    res.status(200).json({
        message: "Handling GET"
    });
});

router.post("/",(req,res,next)=>
{
    const product=new Product({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        price: req.body.price

    });
    product.save()
    .then(savedProduct => {
        res.json(savedProduct);
    })
    .catch(err => {
        res.send(err);
    });
});


router.get("/:productID",(req,res,next)=>
{
    const id=req.params.productID;
    if(id==='special')
    {
        res.status(200).json({
                message:" You discovered the ID"
        });
    }
    else
    {       
        res.status(200).json({
            message:" You passed an ID"
    });
    }
});

router.patch('/:productId',(req,res,next)=>
{
    res.status(200).json({
        message: 'Updated product'
    });
});


router.delete('/:productId',(req,res,next)=>
{
    res.status(200).json({
        message: 'Deleted product'
    });
});

module.exports=router;


