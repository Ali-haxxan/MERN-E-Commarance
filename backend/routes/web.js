const express = require('express')
const router = express.Router()
const app = express()
const cors = require('cors')
const products = require('../data/products')
app.use(cors())
app.use(express.json())



router.get('/',(req,res)=>{
    res.send('Rest Api Server is running!')
})
router.get('/api/products',(req,res)=>{
    console.log(products)
    res.json(products)
})

router.get('/api/product/:id',(req,res)=>{
    const product = products.find((p)=> p._id === req.params.id)
    res.json(product)
})



module.exports=router;