import React, { useState , useEffect} from "react";
import {Container , Row , Col ,Spinner, Button, ListGroup, Badge, Offcanvas} from "react-bootstrap"
import { FaShoppingCart } from 'react-icons/fa';
import ShopItem from "./ShopItem";
import supabaseClient from "../utils/supabaseClient";
import { Navigate, useLocation } from "react-router-dom"
import StoreService from '../core/StoreServices'
function Shop() {
    let location = useLocation()
    const [items, setItems] = useState(undefined);
    const [cart, setCart] = useState([]);
    const [totalCash, setTotalCash] = useState(0.0);
    const [totalItems, setTotalItems] = useState(0.0);
    


    //For the shopping list overlay
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        StoreService.getComponents(setItems)
        //fetch('https://fakestoreapi.com/products')
        //    .then(res=>res.json())
        //    .then(json=>setItems(json))
    },[]);

    function clearList(){
        setTotalCash(0)
        setTotalItems(0)
        const newcart = [];
        setCart(newcart);  
    }

    function findElement(id) {
        let element = undefined;
        //Find the item in items array
        for (let index = 0; index < items.length; index++) {
            element = items[index];
            if (element.IDCOMPONENT === id) {
                //found the element
                return element;
            }
        }
        return undefined;
    }
    
    function handleDelete(id){
        let element = findElement(id);

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
                setTotalCash(totalCash - parseFloat(element.PRICE) );
                setTotalItems(totalItems-1)
                break;
            } 
        }  
    }

    // const popover = (
    //     <Popover id="popover-basic">
    //       <Popover.Header as="h3">Shopping List</Popover.Header>
    //         <Popover.Body>
    //             <ListGroup>
    //             {cart === undefined?null:cart.map(item => (
    //                 <ListGroup.Item> {items[item.id-1].title} 
    //                     <Button variant="primary" onClick={()=>handleBuy(item.id)}>+</Button> 
    //                     <h6> <Badge bg="secondary" pill>{item.quantity}</Badge> </h6>
    //                     <Button variant="danger" onClick={()=>handleDelete(item.id)}>-</Button>
    //                 </ListGroup.Item>
    //             ))}
    //             </ListGroup>
    //             <Row >
    //                 <Col className="mt-2"> Total: {Math.abs( totalCash ).toFixed(2)} € </Col>
    //                 <Col> <Button className="mt-2" variant="primary"> Buy </Button> </Col>
    //             </Row> 
                 
    //         </Popover.Body>
    //     </Popover>
    // );
    
    function handleBuy(id){
        let element = findElement(id);
        // console.log("Found element with id %d", id, element);

        if(element === undefined){
            return;
        }

        if(cart.length===0){
            setCart(prevCart => [...prevCart, {id:id,quantity: 1}])
            setTotalCash(totalCash + parseFloat(element.PRICE) )
            setTotalItems(totalItems+1)
        }else{
            let found = 0;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].id === id ){
                    const newcart = [...cart];
                    newcart[i].quantity += 1;
                    setCart(newcart); 
                    setTotalCash(totalCash + parseFloat(element.PRICE) );
                    setTotalItems(totalItems+1);
                    found = 1;
                    break;
                } 
            }  
            if (found===0){
                setCart(prevCart => [...prevCart, {id:id,quantity: 1}]);
                setTotalCash(totalCash + parseFloat(element.PRICE) );
                setTotalItems(totalItems+1);
            }
        }  
    }

    if(supabaseClient.auth.user()===null){
      return(<Navigate to="/login" state={{ from: location }}/>)
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
                        {/* <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <Button className = "mt-3" size="lg" variant="light" ><FaShoppingCart/> View Cart</Button>
                        </OverlayTrigger> */}
                        <Button variant="primary" className="mt-4" onClick={handleShow}> 
                            <FaShoppingCart className="me-2"/> View Cart <Badge pill bg="secondary">{totalItems}</Badge>
                        </Button>
                    </Col>
                    
                    {/* OFFCANVAS that shows the shopping list */}
                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title as="h3">Shopping List</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Row> 
                                <ListGroup>
                                    {/* The cart only contains the ID and the quantity of the product with that ID */}
                                    {cart === undefined?null:cart.map(function(item, index){
                                        let element = findElement(item.id);
                                        return <ListGroup.Item key={index}> 
                                                    <Row> 
                                                        <Col className="my-auto"> {element.NAME} </Col>
                                                        {/* no ideia why mas className="text-end" nao funciona, mas text-center ja funciona */}
                                                        <Col className="my-auto" style={{textAlign: "right"}}>  
                                                            <Button className="mx-1" variant="primary" onClick={()=>handleBuy(element.IDCOMPONENT)}>+</Button> 
                                                            <Badge bg="secondary" pill>{item.quantity}</Badge> 
                                                            <Button className="mx-1" variant="danger" onClick={()=>handleDelete(element.IDCOMPONENT)}>-</Button>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                    })
                                    // .map(item => (
                                    //     <ListGroup.Item> 
                                    //         <Row> 
                                    //             <Col className="my-auto"> {item.NAME} </Col>
                                    //             {/* no ideia why mas className="text-end" nao funciona, mas text-center ja funciona */}
                                    //             <Col className="my-auto" style={{textAlign: "right"}}>  
                                    //                 <Button className="mx-1" variant="primary" onClick={()=>handleBuy(item.IDCOMPONENT)}>+</Button> 
                                    //                 <Badge bg="secondary" pill>{item.STOCK}</Badge> 
                                    //                 <Button className="mx-1" variant="danger" onClick={()=>handleDelete(item.IDCOMPONENT)}>-</Button>
                                    //             </Col>
                                    //         </Row>
                                    //     </ListGroup.Item>
                                    // ))
                                    }
                                </ListGroup>
                            </Row>
                        </Offcanvas.Body>
                        <Container> 
                            <Row as="h4" >
                                <Col className="mt-2"> Total: {Math.abs( totalCash )} <img style={{lineHeight: '0',height: '1rem'}} src="https://cdn.discordapp.com/attachments/866354544544055346/914201994342850590/Asset_10.svg" /></Col>
                                <Col style={{textAlign: "right"}}>
                                    <Button className="mt-2 me-2" variant="danger" onClick={()=>clearList()}> Clear List </Button>
                                    <Button className="mt-2" variant="primary" > Buy </Button> 
                                </Col>
                            </Row>
                        </Container>
                    </Offcanvas>
                </Row>
                <Row>        
                    {items.map((item, index) => (
                        <ShopItem key={index} title = {item.NAME} img = {item.IMAGE} price = {item.PRICE} id = {item.IDCOMPONENT} action = {handleBuy}/>
                    ))}
                </Row>
            </Container>       
        );
    }
}
export default Shop;
