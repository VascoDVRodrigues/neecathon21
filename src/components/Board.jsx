 import React from "react";
import { Container, Card, CardGroup, Button, Row, Col, ListGroup} from "react-bootstrap"
import BoardCell from "./BoardCell";

function Board(props) {
    return (
        <Container className="mt-3" fluid>
            <CardGroup>
                <BoardCell title={props.board[0].name}/>
                <BoardCell title={props.board[1].name}/>
                <BoardCell title={props.board[2].name}/>
                <BoardCell title={props.board[3].name}/>
                <BoardCell title={props.board[4].name}/>
                <BoardCell title={props.board[5].name}/>
                <BoardCell title={props.board[6].name}/>
            </CardGroup>

            <CardGroup>
                <BoardCell title={props.board[23].name}/>
                <Col> </Col>
                <Col> </Col>
                <Col> </Col>
                <Col> </Col>
                <Col> </Col>
                <BoardCell title={props.board[7].name}/>  
            </CardGroup>

            <CardGroup>
                <BoardCell title={props.board[22].name}/>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <BoardCell title={props.board[8].name}/>
            </CardGroup>  

            <CardGroup>
                <BoardCell title={props.board[21].name}/>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <BoardCell title={props.board[9].name}/>
            </CardGroup>

            <CardGroup>
                <BoardCell title={props.board[20].name}/>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <BoardCell title={props.board[10].name}/>
            </CardGroup>

            <CardGroup>
                <BoardCell title={props.board[19].name}/>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <BoardCell title={props.board[11].name}/>
            </CardGroup>
            
            <CardGroup>
                <BoardCell title={props.board[18].name}/>
                <BoardCell title={props.board[17].name}/>
                <BoardCell title={props.board[16].name}/>
                <BoardCell title={props.board[15].name}/>
                <BoardCell title={props.board[14].name}/>
                <BoardCell title={props.board[13].name}/>
                <BoardCell title={props.board[12].name}/>
            </CardGroup>

            {/* <Row >
                <Col>
                    <Row>
                        <Col><BoardCell title={props.board[0].name}/></Col>
                        <Col><BoardCell title={props.board[1].name}/></Col>
                        <Col><BoardCell title={props.board[2].name}/></Col>
                        <Col><BoardCell title={props.board[3].name}/></Col>
                        <Col><BoardCell title={props.board[4].name}/></Col>
                        <Col><BoardCell title={props.board[5].name}/></Col>
                        <Col><BoardCell title={props.board[6].name}/></Col>
                    </Row>
                    <Row>
                        <Col><BoardCell title={props.board[23].name}/></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col><BoardCell title={props.board[7].name}/></Col>
                    </Row>
                    <Row>
                        <Col><BoardCell title={props.board[22].name}/></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col><BoardCell title={props.board[8].name}/></Col>
                    </Row>
                    <Row>
                        <Col><BoardCell title={props.board[21].name}/></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col><BoardCell title={props.board[9].name}/></Col>
                    </Row>
                    <Row>
                        <Col><BoardCell title={props.board[20].name}/></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col><BoardCell title={props.board[10].name}/></Col>
                    </Row>
                    <Row>
                        <Col><BoardCell title={props.board[19].name}/></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col><BoardCell title={props.board[11].name}/></Col>
                    </Row>
                    <Row>
                        <Col><BoardCell title={props.board[18].name}/></Col>
                        <Col><BoardCell title={props.board[17].name}/></Col>
                        <Col><BoardCell title={props.board[16].name}/></Col>
                        <Col><BoardCell title={props.board[15].name}/></Col>
                        <Col><BoardCell title={props.board[14].name}/></Col>
                        <Col><BoardCell title={props.board[13].name}/></Col>
                        <Col><BoardCell title={props.board[12].name}/></Col>
                    </Row>
                </Col>
            </Row> */}
        </Container>    
    );
}
export default Board;