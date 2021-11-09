import React from "react";
import { Card, Button, Row, Col, ListGroup} from "react-bootstrap"
import { FaStaylinked } from "react-icons/fa";

const styles = {
    card: {
      minWidth: '10vmin',
      width: '10vw'
    }
  }

function BoardCell(props) {
    return (
        <Card className="mb-5" style = {{fontSize:'10px',minWidth: '10vmin', maxWidth:'10vmax',width: '10vw', minHeight:'10vmin', maxHeight:'10vmax', height:'10vw'}}>
            <Card.Body>
                <Card.Title style={{fontSize: '20px'}}>{props.title}</Card.Title>
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