import React, { useState , useEffect} from "react";
import {Container , Row , Col ,Spinner, Popover, OverlayTrigger, Button, ListGroup, Badge} from "react-bootstrap"
import { FaShoppingCart } from 'react-icons/fa';

function Game() {
    const [cells, setCells] = useState(undefined);
    useEffect(() => {
        fetch('./cells.json')
        .then(mockResponses => {
            setCells(mockResponses);
        })
    },[]);
    console.log(cells)
    return(
    <Container>
        <Row className="text-center mb-4">
           
        </Row>
    </Container> );
}
export default Game;