import React from "react";
import { Card, Button, ListGroup} from "react-bootstrap"

const styles = {
    card: {
      borderRadius: 10,
      padding: '1rem',
      width: '40vh'
    },
    cardImage: {
      objectFit: 'contain',
      height: "20vh"
    }
  }

function ShopItem(props) {
    return (
        <Card className="flex-fill mx-2 mb-3 shadow-sm" style={styles.card}>
            <Card.Img variant="top" src={props.img} style={styles.cardImage}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>  
            </Card.Body>
            {/* uncomment this container e o botao fica pequeno */}
            {/* <Container >  */}
                <Button className="mb-2" variant="primary" onClick = {()=>props.action(props.id)}>Add to Cart</Button>
            {/* </Container> */}
            <ListGroup horizontal variant="flush" className=" border-0 justify-content-around">
                <ListGroup.Item className="border-0" as="h5">{props.price+" "}<img style={{lineHeight: '0',height: '1rem'}} src="https://cdn.discordapp.com/attachments/866354544544055346/914201994342850590/Asset_10.svg" /></ListGroup.Item>
                <ListGroup.Item className="border-0" as="h5">Only {props.stock} left!</ListGroup.Item>
            </ListGroup>
            <Button variant="secondary" as="a" href={props.datasheet} target="_blank">Datasheet</Button>

        </Card>     
    );
}
export default ShopItem;