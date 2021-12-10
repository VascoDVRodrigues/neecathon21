import React from "react";
import { Card} from "react-bootstrap"

// const styles = {
//     card: {
//         fontSize:'10px',
//         minWidth: '10vmin', 
//         maxWidth:'10vmax',
//         width: '10vw', 
//         minHeight:'10vmin', 
//         maxHeight:'10vmax', 
//         height:'10vw'
//     },

//     cardImg: {
//         height: "10vw"
//     }
    
//   }

function BoardCell(props) {
    if(props.color === "#ffffff"){
        return (
            <Card style={{margin:"2px"}}>
                <Card.Img src={props.IMAGE}/>
            </Card>     
        );
    }
    let border = "solid 4px " + props.color
    return (
        
        <Card style={{margin:"2px", height: "fit-content"}}>
            <Card.Img style={{border:border}} src={props.IMAGE}/>
        </Card>     
    );
}
export default BoardCell;