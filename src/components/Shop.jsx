import React, { useState , useEffect} from "react";
import {Container , Row , Col ,Spinner, Button, ListGroup, Badge, Offcanvas, Modal, Card} from "react-bootstrap"
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
    const [money, setMoney] = useState(0);

    //For the shopping list overlay
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        StoreService.getComponents(setItems) 
        StoreService.getTeamMoney(setMoney)
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
    function buyItems(){
        if(totalCash>money){
            setModalText("Woohoo, não tens dinheiro suficiente para comprar os componentes! ")
        }else{
            StoreService.buyComponents(cart, setModalText)
            setMoney(money-totalCash)
            clearList()
        }
        setModal(true)
    }
    function handleRequestComponent(){
        setModalText(<div><h3>Requisitar Componentes</h3>
            <form style={{display:"flex", flexWrap:"warp", flexDirection:"column"}}>
                <label >Nome do component:</label>
                <input type="text" id="componentname" name="componentname"/><br />
                <label >Link para compra:</label>
                <input type="text" id="componentlink" name="componentlink"/><br />
                <label>Quantidade:</label>
                <input type="text" id="componentquantity" name="componentquantity"/><br />
                <Button className="mt-1 " variant="success" onClick={()=>StoreService.requestComponent(document.getElementById('componentname').value,document.getElementById('componentlink').value,document.getElementById('componentquantity').value, setModalText)}>Requisitar</Button>
            </form>
            </div>)
        setModal(true)
    }
    function handleBuy(id){
        let element = findElement(id);

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
                            <span className="visually-hidden">A Carregar...</span>
                        </Spinner>
                    </Col>
                </Row>
            </Container>      
        );
    }else{
        return (
            <Container fluid >
                <Modal show={modal} onHide={()=>{setModalText("");setModal(false)}}>
                    <Modal.Body>{modalText}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={()=>{setModalText("");setModal(false)}}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Row className="text-center mb-4" style={{alignItems: "center"}}>
                    <Col className="justify-content-flex-end">
                        <Card style={{ width: '18rem', display: "inline-block"}}>
                            <Card.Body><Col className="my-auto justify-content-flex-end h6">Budget: {money!==undefined?money:0} <img alt="" style={{lineHeight: '0',height: '1rem'}} src="https://cdn.discordapp.com/attachments/866354544544055346/914201994342850590/Asset_10.svg" /></Col></Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6}><h1 className="display-4 font-weight-normal" >Loja</h1></Col>
                    <Col  className="justify-content-flex-end">
                        {/* <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <Button className = "mt-3" size="lg" variant="light" ><FaShoppingCart/> View Cart</Button>
                        </OverlayTrigger> */}
                        <Button variant="primary"  onClick={handleShow}> 
                            <FaShoppingCart className="me-2"/> Ver Carro <Badge pill bg="secondary">{totalItems}</Badge>
                        </Button>
                        <Button variant="warning" className="mx-2 " onClick={handleRequestComponent}> 
                            Faltam componentes?
                        </Button>
                    </Col>
                    
                    {/* OFFCANVAS that shows the shopping list */}
                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title as="h3">Lista de Compras</Offcanvas.Title>
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
                                                            <Button className="mx-1" variant="danger" onClick={()=>handleDelete(element.IDCOMPONENT)}>-</Button>
                                                            <Badge bg="secondary" pill>{item.quantity}</Badge> 
                                                            <Button className="mx-1" variant="primary" onClick={()=>handleBuy(element.IDCOMPONENT)}>+</Button> 
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                    })
                                    }
                                </ListGroup>
                            </Row>
                        </Offcanvas.Body>
                        <Container> 
                            <Row as="h4" >
                                <Col className="mt-2"> Total: {Math.abs( totalCash )} <img alt="" style={{lineHeight: '0',height: '1rem'}} src="https://cdn.discordapp.com/attachments/866354544544055346/914201994342850590/Asset_10.svg" /></Col>
                                {cart.length!==0?<Col style={{textAlign: "right"}}>
                                    <Button className="mt-2 me-2" variant="danger" onClick={()=>clearList()}> Limpar Carro </Button>
                                    <Button className="mt-2" variant="primary" onClick={()=>buyItems()}>Comprar</Button> 
                                </Col>:null}
                            </Row>
                        </Container>
                    </Offcanvas>
                </Row>
                <Row>        
                    {items.map((item, index) => (
                        <ShopItem key={index} title = {item.NAME} img = {item.IMAGE} price = {item.PRICE} id = {item.IDCOMPONENT} action = {handleBuy} stock = {item.STOCK} datasheet = {item.REFSHEET}/>
                    ))}
                </Row>
            </Container>       
        );
    }
}
export default Shop;
