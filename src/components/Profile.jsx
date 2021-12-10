import React, { useState , useEffect} from "react";
import {Container , Row , Col, Card, Badge, ListGroup, Spinner, Popover, OverlayTrigger, Button, Modal} from "react-bootstrap"
import { FaPencilAlt } from 'react-icons/fa';
import supabaseClient from "../utils/supabaseClient";
import { Navigate, useLocation } from "react-router-dom"

import ProfileServices from "../core/ProfileServices";

function Profile() {
    let location = useLocation()
    const [team, setTeam] = useState(undefined);
    const [teamMembers, setTeamMembers] = useState(undefined);
    const [teamComponents, setTeamComponents] = useState(undefined);
    const [teamHouses, setTeamHouses] = useState(undefined);
    const [admin, setAdmin] = useState(undefined);
    const [allComponents, setAllComponents] = useState(undefined);

    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState("");



    useEffect(() => {
        ProfileServices.getPerson(setAdmin)
        ProfileServices.getTeam(setTeam)
        ProfileServices.getTeamMembers(setTeamMembers)
        ProfileServices.getTeamComponents(setTeamComponents)
        ProfileServices.getTeamHouses(setTeamHouses)
    },[])
    

    function componentsList() {
        var allComponents;
        ProfileServices.getAllComponents(allComponents);
        console.log(allComponents);

    }

    function handlePictureChange(){
        setModalText(<div><h3>Editar imagem de perfil:</h3>
            <form style={{display:"flex", flexWrap:"warp", flexDirection:"column"}}>
                <label >Para modificares a vossa imagem de perfil, coloca o link de uma imagem no campo abaixo:</label>
                <input type="text" id="imageurl" name="imageurl"/><br />
                <Button className="mt-1 " variant="success" onClick={()=>ProfileServices.changeImage(document.getElementById('imageurl').value, setModal)}>Submeter</Button>
            </form>
            </div>)
        setModal(true)
    }


    if(supabaseClient.auth.user()===null){
        return(<Navigate to="/login" state={{ from: location }}/>)
    }

    if(team === undefined || teamMembers === undefined || teamComponents === undefined || teamHouses === undefined ){
        return (
            <Container>
                <Row className="text-center mb-4">
                <Col>
                    <Spinner className="mt-3" animation="border" role="status">
                        <span className="visually-hidden">A Carregar...</span>
                    </Spinner>
                </Col>
                </Row>
            </Container>      
        );
    }else{
    return(
        <Container fluid="lg">
            <Modal show={modal} onHide={()=>{setModalText("");setModal(false)}}>
                    <Modal.Body>{modalText}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={()=>{setModalText("");setModal(false)}}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            <Row>
                <Col className="pt-4 pb-4 p-2 col-sm-auto" md="auto"> 
                    <Card style={{ width: '80vw', maxWidth: '22rem', 'margin': '0 auto' }}>
                        <Button style={{position:"absolute", top: "1vh", right:"1vh"}}  variant="secondary" onClick={handlePictureChange}><FaPencilAlt/></Button>
                        <Card.Img variant="top" style={{maxHeight: "30vh", objectFit: "contain", backgroundColor: "#b5c6cf"}} src={team[0].IMAGE === null?"https://media.discordapp.net/attachments/866354544544055346/915249222079615006/blank-profile-picture-973460_640.png":team[0].IMAGE} />
                        <Card.Body>
                            <Card.Title>{team[0].NAME}</Card.Title>
                            <Card.Text>
                                Descrição motivacional de equipa
                            </Card.Text>
                            {admin?<Card.Text><Button variant="warning" className="mx-2 " onClick={componentsList}>Obter lista de componentes por equipa;</Button></Card.Text>:null}
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="pt-4 pb-4 p-2" >
                <Row className="m-0 justify-content-around" >

                    <Col className="p-0 mb-3 "  lg={{ span: 5}}>
                        <Card >
                            <Card.Header as="h5">Equipa:</Card.Header>
                            <ListGroup as="ul" variant="flush">
                            {teamMembers === undefined?null:teamMembers.map(member => (
                                    <ListGroup.Item as="li">{member.name}</ListGroup.Item>
                            ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col className="p-0 mb-3 " lg={{ span: 5}}> {/*d-grid align-items-center*/}
                        <Card >
                            <Card.Header as="h5">Informações de Jogo: </Card.Header>
                            <ListGroup as="ul"  variant="flush">
                            <ListGroup.Item as="li">NEECoins: {team[0].CASH} <img alt="" style={{lineHeight: '0',height: '1rem'}} src="https://cdn.discordapp.com/attachments/866354544544055346/914201994342850590/Asset_10.svg" /></ListGroup.Item>
                            <ListGroup.Item as="li">Casa atual no tabuleiro: {team[0].HOUSE}</ListGroup.Item>

                            </ListGroup>
                        </Card>
                    </Col>
                    
                </Row>
                <hr/>
                <Row className="m-0" sm={1} style={{ justifyContent: 'space-around' }}>
                    <Col className="p-0 mb-3"   lg={{ span: 5}}>
                    <Card >
                            <Card.Header as="h5">Inventário:</Card.Header>
                            <ListGroup as="ul"  variant="flush" style={{maxHeight: '35vh', marginBottom: '10px', overflow: "auto"}}>                     
                            {teamComponents === undefined?null:teamComponents.map((component,i)  => (
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <OverlayTrigger trigger="hover" key={"bottom"} placement={"bottom"} overlay={
                                            <Popover id={`popover-positioned-${"bottom"}`}>
                                                <Popover.Header as="h3">Clica para aceder a datasheet</Popover.Header>
                                                <Popover.Body>
                                                    <img alt="" style={{maxWidth: "100%"}}src={component.IMAGE}></img>
                                                </Popover.Body>
                                            </Popover>
                                        }>
                                        <a href={component.REFSHEET} target="_blank" rel="noreferrer">{component.NAME}</a>
                                        </OverlayTrigger>
                                    </div>
                                    <Badge variant="primary" pill>{component.QUANTITY}</Badge>
                                </ListGroup.Item>
                            ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col className="p-0 mb-3"   lg={{ span: 5}}>
                    <Card >
                            <Card.Header as="h5">Lista de Casas: </Card.Header>
                            <ListGroup as="ul" variant="flush" style={{maxHeight: '48vh', marginBottom: '10px', overflow: "auto"}}>
                            {teamHouses === undefined?null:teamHouses.map(House => (
                                    <ListGroup.Item as="li" style={{backgroundColor: House.COLOR}}>{House.NAME}</ListGroup.Item>
                            ))}

                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
              </Col>
            </Row>
          
        </Container>
    )
    }
}
export default Profile;
