import React from "react";
import { Card, Button, Row, Col, ListGroup} from "react-bootstrap"

const styles = {
    card: {
      borderRadius: 10,
      padding: '1rem',
      width: '20%'
    },
    cardImage: {
      objectFit: 'contain',
      height: 300
    }
  }

function ShopItem(props) {
    return (
        <Card className="me-3 mb-3 shadow-sm" style={styles.card}>
            <Card.Img variant="top" src={props.img} style={styles.cardImage}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Row> 
                    <Col>
                        <Button variant="primary" onClick = {()=>props.action(props.id)}>Add to Cart</Button>
                    </Col>
                </Row>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.price.toFixed(2)+" €"}</ListGroup.Item>
            </ListGroup>
        </Card>     
    );
}
export default ShopItem;