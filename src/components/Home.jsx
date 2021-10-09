import React from "react";
import {Container , Row , Col } from "react-bootstrap"

function Home() {
    return (
        <Container>
            <Row className="text-center mb-4">
                <Col><h1 className="display-4 font-weight-normal text-light" >Home</h1></Col>
            </Row>
        </Container>       
    );
}
export default Home;