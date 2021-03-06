import React from "react";
import { Card } from "react-bootstrap"

function LeaderboardElement(props) {
    let border = "solid 4px " + props.color
    return ( 
        <Card className="mb-1" style={{border: border}}>
            <Card.Body>
            <Card.Title> Team {props.name}</Card.Title>
            <Card.Text as={"div"}>
                <h6>You have {props.coins} coins!</h6>  
            </Card.Text>
            <Card.Text as={"div"}>
                {props.name==="Pot"?null:<h6>Currently on position {props.position}</h6>}
            </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default LeaderboardElement;