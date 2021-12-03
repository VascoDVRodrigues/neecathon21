import React from "react";
import { useState , useEffect} from "react";
import { Container, CardGroup, Button, Row, Col, Spinner, Card} from "react-bootstrap"
import BoardCell from "./BoardCell";
import Leaderboard from "./Leaderboard";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import "./styles.css";

const TIME_BETWEEN_PLAYS = 15; //in minutes

function Board(props) {
    const [key, setKey] = useState(0);
    const [teams, setTeams] = useState(undefined);

    useEffect(() => {
        var json = require('./teams.json'); 
        setTeams(json)
    },[]);

    function setKeys() {
        setKey(key + 1)
    }

    const renderTime = (time) => {
        let secs = (time % 60);
        let mins = (time - secs)/60;
        return (
          <div className="timer">
            <div>{ mins }</div>
            <div>Minutes</div>
            <div>{secs}</div>
            <div>Seconds</div>
          </div>
        );
      };
        
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
                    <Col className="my-auto"><Button onClick={()=>setKeys()} variant="primary">Roll</Button></Col>
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
                <Col> 
                    <Card>
                        <Card.Body> 
                            <Card.Title>Time until next play</Card.Title>
                            <Card.Text>
                                <div className="timer-wrapper"> 
                                    <CountdownCircleTimer key={key} isPlaying duration={TIME_BETWEEN_PLAYS * 60} colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000', 0.33]]}>
                                        {({ remainingTime }) => renderTime(remainingTime)} 
                                    </CountdownCircleTimer>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                </Col>
                </Row>
            </Container>    
        );
    }
}
export default Board;