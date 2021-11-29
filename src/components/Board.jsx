import React from "react";
import { useState , useEffect} from "react";
import { Container, Card, CardGroup, Button, Row, Col, ListGroup, Spinner} from "react-bootstrap"
import supabaseClient from "../utils/supabaseClient";
import BoardCell from "./BoardCell";
import Leaderboard from "./Leaderboard";


function Board(props) {
    const [teams, setTeams] = useState(undefined);
    useEffect(() => {
        var json = require('./teams.json'); 
        setTeams(json)
    },[]);

    if(teams === undefined){
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
    } else {
        return (
            <Container className="mt-3" fluid>
                <Row>
                    <Col>
                    <Leaderboard teams={teams.teams}/> 
                    </Col>

                    <Col md="5">
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
                    <Col className="my-auto"><Button variant="primary">Roll</Button></Col>
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
                </Col>
                <Col></Col>
                </Row>
            </Container>    
        );
    }
}
export default Board;