import React from "react";
import {Container , Row } from "react-bootstrap"
import Board from "./Board"
import supabaseClient from "../utils/supabaseClient";
import { Navigate, useLocation } from "react-router-dom"


function Game() {
    let location = useLocation()

    if(supabaseClient.auth.user()===null){
        return(<Navigate to="/login" state={{ from: location }}/>)
    }

    return(
        <Container fluid>
            <Row className="text-center mb-4">  
                <Board />  
            </Row>
        </Container> );
    
}
export default Game;