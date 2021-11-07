import React from "react";
import { Container, Card, Button, Row, Col, ListGroup} from "react-bootstrap"

function Board(props) {
    return (
        <Container className="mt-3">
            <Row>
                <Col/>
                <Col md="8">
                    <Row>
                        <Col>{props.board[0].name}</Col>
                        <Col>{props.board[1].name}</Col>
                        <Col>{props.board[2].name}</Col>
                        <Col>{props.board[3].name}</Col>
                        <Col>{props.board[4].name}</Col>
                        <Col>{props.board[5].name}</Col>
                        <Col>{props.board[6].name}</Col>
                    </Row>
                    <Row>
                        <Col>{props.board[23].name}</Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>{props.board[7].name}</Col>
                    </Row>
                    <Row>
                        <Col>{props.board[22].name}</Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>{props.board[8].name}</Col>
                    </Row>
                    <Row>
                        <Col>{props.board[21].name}</Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>{props.board[9].name}</Col>
                    </Row>
                    <Row>
                        <Col>{props.board[20].name}</Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>{props.board[10].name}</Col>
                    </Row>
                    <Row>
                        <Col>{props.board[19].name}</Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>{props.board[11].name}</Col>
                    </Row>
                    <Row>
                        <Col>{props.board[18].name}</Col>
                        <Col>{props.board[17].name}</Col>
                        <Col>{props.board[16].name}</Col>
                        <Col>{props.board[15].name}</Col>
                        <Col>{props.board[14].name}</Col>
                        <Col>{props.board[13].name}</Col>
                        <Col>{props.board[12].name}</Col>
                    </Row>
                </Col>
                <Col/>
            </Row>
        </Container>    
    );
}
export default Board;