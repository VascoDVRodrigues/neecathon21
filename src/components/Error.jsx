import React from "react";
import {Container , Row , Col } from "react-bootstrap"
import supabaseClient from "../utils/supabaseClient";

function Error() {
    
    return (
        <Container>
            <Row className="text-center mb-4">
                <Col><h1 className="display-4 font-weight-normal" >:( 404 Page not found :(</h1></Col>
            </Row>
        </Container>       
    );
                
}
export default Error;