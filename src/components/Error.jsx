import React from "react";
import {Container , Row , Col } from "react-bootstrap"

function Error() {
    
    return (
        <Container>
            <Row className="text-center mb-4">
                <Col><h1 className="display-4 font-weight-normal" >Nem o Hackerboy conseguiu encontrar esta página!</h1></Col>
            </Row>
        </Container>       
    );
                
}
export default Error;