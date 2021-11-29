import React, { useState , useEffect, Component} from "react";
import {Container , Row , Col, Card, ListGroupItem, Badge, ListGroup, Spinner, Popover, OverlayTrigger, Button , Offcanvas} from "react-bootstrap"

import supabaseClient from "../utils/supabaseClient";
import { Navigate, useLocation } from "react-router-dom"




function Profile() {
    let location = useLocation()
    const [team, setTeam] = useState(undefined);
    const [teamMembers, setTeamMembers] = useState(undefined);
    const [teamComponents, setTeamComponents] = useState(undefined);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
    getTeamMembers()
    getTeam()
    getTeamComponents()
      }, [])
    

    if(supabaseClient.auth.user()===null){
        return(<Navigate to="/login" state={{ from: location }}/>)
    }

    async function getTeam() {
        try {
            let { data, error, status } = await supabaseClient
              .from('Teams')
              .select(`*`)
      
            if (error && status !== 406) {
              throw error
            }
            if (data) {
              setTeam(data)
            }
            
          } catch (error) {
            alert(error.message)
          }
    }

    async function getTeamMembers() {
        try {
            let { data, error, status } = await supabaseClient
              .from('TeamMembers')
              .select(`*`)
      
            if (error && status !== 406) {
              throw error
            }
            if (data) {
                var array = [];

                data.forEach(element => {
                    array.push(element.Name);
                });
                setTeamMembers(array);
            }
          } catch (error) {
            alert(error.message)
          } 
    }

    async function getTeamComponents() {
        try {
            let { data, error, status } = await supabaseClient
              .from('Components|Team')
              .select(`*`)
      
            if (error && status !== 406) {
              throw error
            }
            if (data) {
                var array = new Array();
                for (const component of data) {
                    var item = {QUANTITY: component.QUANTITY};
                    try {
                        let { data, error, status } = await supabaseClient
                          .from('Components')
                          .select(`*`).eq('IDCOMPONENT', component.IDCOMPONENT)
                  
                        if (error && status !== 406) {
                          throw error
                        }
                        if (data) {
                            item.NAME = data[0].NAME 
                            array.push(item)
                        }
                      } catch (error) {
                        alert(error.message)
                    }
                  }
                setTeamComponents(array);
            }
          } catch (error) {
            alert(error.message)
          } 
    }


    if(team === undefined || teamMembers === undefined || teamComponents === undefined){

        return (
            <Container>
                <Row className="text-center mb-4">
                <Col>
                        <Spinner className="mt-3" animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            </Container>      
        );
    }else{
    console.log(team, teamMembers, teamComponents.len);
    return(
        <Container fluid="lg">
            <Row>
                <Col className="pt-4 pb-4 p-2 col-sm-auto" md="auto"> 
                    <Card style={{ width: '80vw', maxWidth: '22rem', 'margin': '0 auto' }}>
                        <Card.Img variant="top" src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large" />
                        <Card.Body>
                            <Card.Title>{team[0].NAME}</Card.Title>
                            <Card.Text>
                                Descrição motivacional de equipa
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col className="pt-4 pb-4 p-2" >
                <Row className="m-0 justify-content-around" >

                    <Col className="p-0 mb-3 "  lg={{ span: 5}}>
                        <Card >
                            <Card.Header as="h5">Equipa:</Card.Header>
                            <ListGroup as="ul" variant="flush">
                            {teamMembers === undefined?null:teamMembers.map(member => (
                                    <ListGroup.Item as="li">{member}</ListGroup.Item>
                            ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col className="p-0 mb-3 " lg={{ span: 5}}> {/*d-grid align-items-center*/}
                        <Card >
                            <Card.Header as="h5">Informações de Jogo: </Card.Header>
                            <ListGroup as="ul"  variant="flush">
                            <ListGroup.Item as="li">NEECoins: {team[0].CASH} <img style={{lineHeight: '0',height: '1rem'}} src="https://cdn.discordapp.com/attachments/866354544544055346/914201994342850590/Asset_10.svg" /></ListGroup.Item>
                            <ListGroup.Item as="li">Número de Casa Compradas: {team[0].HOUSE}</ListGroup.Item>

                            </ListGroup>
                        </Card>
                    </Col>
                    
                </Row>
                <hr/>
                <Row className="m-0" sm={1} style={{ justifyContent: 'space-around' }}>
                    <Col className="p-0 mb-3"   lg={{ span: 5}}>
                    <Card >
                            <Card.Header as="h5">Inventário:</Card.Header>
                            <ListGroup as="ul"  variant="flush" style={{maxHeight: '48vh', marginBottom: '10px','overflow':'scroll', WebkitOverflowScrolling: 'touch'}}>                     
                            {teamComponents === undefined?null:teamComponents.map((component,i)  => (
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        {component.NAME}

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
                            <ListGroup as="ul" variant="flush">
                            <ListGroup.Item as="li">NEECoins: 300 <img style={{lineHeight: '0',height: '1rem'}} src="https://cdn.discordapp.com/attachments/866354544544055346/914201994342850590/Asset_10.svg" /></ListGroup.Item>
                            <ListGroup.Item as="li">Número de Casa Compradas: 7</ListGroup.Item>

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
