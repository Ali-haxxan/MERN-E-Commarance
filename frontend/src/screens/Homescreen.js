import React, { useEffect } from 'react'
import {Row ,Col} from 'react-bootstrap'
import Product from "../components/Product"
import { useState } from 'react'
import axios from 'axios'

const Homescreen = () => {

  const [products, setProducts]=useState([])
useEffect(()=>{
  const fetchProducts = async () => {
    const {data} = await axios.get('/api/products')
    setProducts(data)
  }
  fetchProducts()
},[])
  return (
    <div>
    <h1>Product List</h1>
    
        <Row>
        {products.map(product=>(
            <Col key={product._id} sm={12} md={6 } lg={4} xl={3} >
               
                    <Product product={product}/>
                
            </Col>
        ))}
        </Row>
    </div>
  )
}

export default Homescreen