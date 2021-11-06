import React from "react";
import { Card, Button, Row, Col, ListGroup} from "react-bootstrap"

function BoardCell(props) {
    return (
        <div>Title: {props.title}</div>    
    );
}
export default BoardCell;