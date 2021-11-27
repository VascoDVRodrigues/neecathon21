import React from "react";
import { Card,  Table} from "react-bootstrap"

const styles = {
    card: {
        fontSize:'10px',
        minWidth: '10vmin', 
        maxWidth:'10vmax',
        width: '10vw', 
        minHeight:'10vmin', 
        maxHeight:'10vmax', 
        height:'10vw'
    },

    cardImg: {
        height: "10vw"
    }
    
  }

function BoardCell(props) {
    return (
        <Card>
            <Card.Img variant="top" src="/imagem.png"/>
            <Card.ImgOverlay className="p-0 ">
                <Card.Body className="p-0">
                    <Table bordered size="sm" className="mb-0">
                        <tbody>
                            <tr>
                                <td style={{backgroundColor:"#00FF00", color:"#00FF00"}}>N</td>
                                <td style={{backgroundColor:"#0000FF", color:"#0000FF"}}>E</td>
                                <td style={{backgroundColor:"#FFFF00", color:"#FFFF00"}}>E</td>
                                <td style={{backgroundColor:"#800080", color:"#800080"}}>C</td>
                                <td style={{backgroundColor:"#FF0000", color:"#FF0000"}}>A</td>
                            </tr> 
                            <tr>   
                                <td style={{backgroundColor:"#FF0000", color:"#FF0000"}}>T</td>
                                <td style={{backgroundColor:"#800080", color:"#800080"}}>H</td>
                                <td style={{backgroundColor:"#FFFF00", color:"#FFFF00"}}>O</td>
                                <td style={{backgroundColor:"#0000FF", color:"#0000FF"}}>N</td>
                                <td style={{backgroundColor:"#00FF00", color:"#00FF00"}}>3</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>     
    );
}
export default BoardCell;