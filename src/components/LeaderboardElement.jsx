import React from "react";
import { Card } from "react-bootstrap"

function LeaderboardElement(props) {
    return (
        <Card>
            <Card.Body>
            <Card.Title> Team {props.name}</Card.Title>
            <Card.Text>
                You have {props.coins} coins yay
            </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default LeaderboardElement;