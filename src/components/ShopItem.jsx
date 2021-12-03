import React from "react";
import { Card, Button, ListGroup} from "react-bootstrap"

const styles = {
    card: {
      borderRadius: 10,
      padding: '1rem',
      width: '20rem'
    },
    cardImage: {
      objectFit: 'contain',
      height: 300
    }
  }

function ShopItem(props) {
    return (
        <Card className="flex-fill me-3 mb-3 shadow-sm" style={styles.card}>
            <Card.Img variant="top" src={props.img} style={styles.cardImage}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>  
            </Card.Body>
            {/* uncomment this container e o botao fica pequeno */}
            {/* <Container >  */}
                <Button className="mb-2" variant="primary" onClick = {()=>props.action(props.id)}>Add to Cart</Button>
            {/* </Container> */}
            <ListGroup variant="flush">
                <ListGroup.Item as="h5">{props.price.toFixed(2)+" €"}</ListGroup.Item>
            </ListGroup>
        </Card>     
    );
}
export default ShopItem;