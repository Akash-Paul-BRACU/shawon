import React from 'react'
import products from "../products"
import {Container, Row, Col } from "react-bootstrap"
import Product from '../components/Product'
const HomeScreen = () => {
    return (
        <div>
            
               <Container>
                   <Row>
                       {products.map(data=>(
                        <Col sm={12} md={6} lg={4} xl={3}>
                       <Product product={data} />
                       </Col>
                       )
                       )
                    }
                   </Row>
               </Container>
            
        </div>
    )
}

export default HomeScreen
