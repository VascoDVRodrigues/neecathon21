import React, { useState , useEffect} from "react";
import {Container , Row , Col, ListGroup} from "react-bootstrap"
import BoardCell from "./BoardCell"


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
    <Container fluid>
        <Row className="text-center mb-4">
        <ListGroup horizontal>
            <ListGroup.Item><BoardCell/></ListGroup.Item>
            <ListGroup.Item>ListGroup</ListGroup.Item>
            <ListGroup.Item>renders</ListGroup.Item>
            <ListGroup.Item>horizontally!</ListGroup.Item>
        </ListGroup> 
        
        
        </Row>
    </Container> );
}
export default Game;