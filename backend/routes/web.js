const express = require('express')
const router = express.Router()
const app = express()
const cors = require('cors')
const asyncHandler = require('express-async-handler')
// const products = require('../data/products')
const Products = require('../models/productModel')
app.use(cors())
app.use(express.json())



router.get('/',(req,res)=>{
    res.send("server is running!")
})



router.get('/api/products', asyncHandler( async (req,res)=>{
    const product = await Products.find({})
    res.json(product)
}))



router.get('/api/product/:id', async (req,res)=>{
    const product = await Products.findById(req.params.id)
    if(product){
        res.json(product)
    }
    else
    {
        res.status(404).json({message: 'Product Not Found!'})
    }
})



module.exports=router;