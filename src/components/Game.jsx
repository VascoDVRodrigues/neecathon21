import React, { useState , useEffect} from "react";
import {Container , Row , Col, Spinner} from "react-bootstrap"
import supabaseClient from "../utils/supabaseClient";
import { Navigate, useLocation } from "react-router-dom"

function Game() {
    let location = useLocation()

    if(supabaseClient.auth.user()===null){
        return(<Navigate to="/login" state={{ from: location }}/>)
    }
        return(
            <Container>
                <Row className="text-center mb-4">
                    <Col><h1 className="display-4 font-weight-normal" >:( 404 Page not found :(</h1></Col>
                </Row>
            </Container>
        );

}
export default Game;