import React, { useState , useEffect} from "react";
import {Container , Row , Col, Spinner} from "react-bootstrap"
import Board from "./Board"
import supabaseClient from "../utils/supabaseClient";
import { Navigate, useLocation } from "react-router-dom"
import GameServices from "../core/GameServices";

function Game() {
    let location = useLocation()
    const [cells, setCells] = useState(undefined);
    const [houses, setHouses] = useState(undefined);

    useEffect(() => {
        var json = require('./cells.json'); 
        setCells(json)
        GameServices.getHouses(setHouses);
        //selectTodos()
    },[]);  
    if(supabaseClient.auth.user()===null){
        return(<Navigate to="/login" state={{ from: location }}/>)
    }

    if(houses === undefined ){
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
    } 
    else {
        return(
            <Container fluid>
                <Row className="text-center mb-4">  
                    <Board board = {cells.cells} houses={houses}/>  
                </Row>
            </Container> );
    }
}
export default Game;