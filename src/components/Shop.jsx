import React, { useState , useEffect} from "react";
import {Container , Row , Col ,Spinner, Popover, OverlayTrigger, Button, ListGroup, Badge} from "react-bootstrap"
import { FaShoppingCart } from 'react-icons/fa';
import ShopItem from "./ShopItem";

function Shop() {
    const [items, setItems] = useState(undefined);
    const [cart, setCart] = useState([]);
    const [totalCash, setTotalCash] = useState(0.0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItems(json))
    },[]);

    function handleDelete(id){
        console.log(id)
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].id === id ){
                if (cart[i].quantity === 1){
                    const newcart = [...cart];
                    newcart.splice(i, 1);
                    setCart(newcart); 
                }
                else{
                    const newcart = [...cart];
                    newcart[i].quantity-=1;
                    setCart(newcart); 
                }
                setTotalCash(totalCash - parseFloat(items[id-1].price) )
                break;
            } 
        }  
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Shopping List</Popover.Header>
            <Popover.Body>
                <ListGroup>
                {cart === undefined?null:cart.map(item => (
                    <ListGroup.Item> {items[item.id-1].title} <Badge variant="primary" pill>{item.quantity}</Badge> <Button variant="primary" onClick={()=>handleBuy(item.id)}>+</Button> <Button variant="danger" onClick={()=>handleDelete(item.id)}>-</Button></ListGroup.Item>
                ))}
                </ListGroup>
                <Row >
                    <Col className="mt-2"> Total: {Math.abs( totalCash ).toFixed(2)} € </Col>
                    <Col> <Button className="mt-2" variant="primary"> Buy </Button> </Col>
                </Row> 
                 
            </Popover.Body>
        </Popover>
    );
    
    function handleBuy(id){
        if(cart.length===0){
            setCart(prevCart => [...prevCart, {id:id,quantity: 1}])
            setTotalCash(totalCash + parseFloat(items[id-1].price) )
        }else{
            let found = 0;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].id === id ){
                    const newcart = [...cart];
                    newcart[i].quantity += 1;
                    setCart(newcart); 
                    setTotalCash(totalCash + parseFloat(items[id-1].price) )
                    found = 1;
                    break;
                } 
            }  
            if (found===0){
                setCart(prevCart => [...prevCart, {id:id,quantity: 1}])
                setTotalCash(totalCash + parseFloat(items[id-1].price) )
            }
        }  
    }
    if(items === undefined){
        return (
            <Container>
                <Row className="text-center mb-4">
                <Col>
                        <Spinner className="mt-3" animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            </Container>      
        );
    }else{
        return (
            <Container fluid >
                <Row className="text-center mb-4">
                    <Col/>
                    <Col xs={6}><h1 className="display-4 font-weight-normal" >Shop</h1></Col>
                    <Col  className="justify-content-flex-end">
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <Button className = "mt-3" size="lg" variant="light" ><FaShoppingCart/> View Cart</Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
                <Row>        
                    {items.map(item => (
                        <ShopItem title = {item.title} description = {item.description} img = {item.image} price = {item.price} id = {item.id} action = {handleBuy}/>
                    ))}
                </Row>
            </Container>       
        );
    }
}
export default Shop;