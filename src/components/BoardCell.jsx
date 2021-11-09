import React from "react";
import { Card, Button, Row, Col, ListGroup} from "react-bootstrap"
import { FaStaylinked } from "react-icons/fa";

const styles = {
    card: {
      height: '10vh',
    }
  }

function BoardCell(props) {
    return (
        <Card className="mb-3" styles = {styles.card}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Row> 
                    <Col>
                        ola
                    </Col>
                </Row>
            </Card.Body>
        </Card>     
    );
}
export default BoardCell;