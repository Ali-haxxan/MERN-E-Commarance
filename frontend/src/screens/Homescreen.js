import React from 'react'
import {Row ,Col} from 'react-bootstrap'
import Product from "../components/Product"
import products from '../products'
const Homescreen = () => {
  return (
    <div>
    <h1>Product List</h1>
    
        <Row>
        {products.map(product=>(
            <Col sm={12} md={6 } lg={4} xl={3} >
               <p>
                    <Product product={product}/>
               </p> 
            </Col>
        ))}
        </Row>
    </div>
  )
}

export default Homescreen