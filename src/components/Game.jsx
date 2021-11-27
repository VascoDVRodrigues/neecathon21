import React, { useState , useEffect} from "react";
import {Container , Row , Col, ListGroup, Spinner} from "react-bootstrap"
import Board from "./Board"
import supabaseClient from "../utils/supabaseClient";
import { Navigate, useLocation } from "react-router-dom"

function Game() {
    let location = useLocation()

    const [cells, setCells] = useState(undefined);
    const [logged, setLogged] = useState(undefined);
    useEffect(() => {
        var json = require('./cells.json'); 
        setCells(json)
        setTimeout(function(){
            if(supabaseClient.auth.user()===null){
                setLogged(false)
            }else{
                setLogged(true)
            }
       },1000); 
    },[]);  
    if(logged === undefined){
        return null
    }
    else if(cells === undefined ){
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
    } 
    else if(logged===false){
        return(<Navigate to="/login" state={{ from: location }}/>)
    }
    else {
        return(
            <Container fluid>
                <Row className="text-center mb-4">  
                    <Board board = {cells.cells}/>  
                </Row>
            </Container> );
    }

    

}
export default Game;