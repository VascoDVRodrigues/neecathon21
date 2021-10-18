import React, { useState , useEffect} from "react";
import {Container , Row , Col ,Spinner} from "react-bootstrap"
import ShopItem from "./ShopItem";

function Shop() {
    const [items, setItems] = useState(undefined);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItems(json))
    },[]);
    // console.log
    if(items === undefined){
        return (
            <Container>
            <Row className="text-center mb-4">
                <Col>
        <Spinner className="mt-3" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></Col></Row> </Container>  
        
        );
    }else{
        
        return (
            <Container fluid style={{ paddingLeft: "2%"}}>
                <Row className="text-center mb-4">
                    <Col><h1 className="display-4 font-weight-normal" >Shop</h1></Col>
                </Row>
                <Row>
                    <Col md={11}>
                        <Row> 
                        {items.map(item => (
                            <ShopItem title = {item.title} description = {item.description} img = {item.image} price = {item.price}/>
                        ))}
                        </Row>
                    </Col>
                    <Col>
                        lalala
                    </Col>
                </Row>
            </Container>       
        );
    }
}
export default Shop;