import React, { useEffect , useState} from "react";
import {Container , Row , Col, Card , Button} from "react-bootstrap"
import { Auth } from "@supabase/ui";
import signIn from "../utils/signIn";
import supabaseClient from "../utils/supabaseClient";
import {FcGoogle} from 'react-icons/fc';
import { Route, Navigate, useLocation } from "react-router-dom"

function UserRedirect() {
    const [loading, setLoading] = useState(true);
    const [logged, setLogged] = useState(undefined);
    const [loader, setLoader] = useState(false);


    useEffect(() => {
        setTimeout(function(){
            if(supabaseClient.auth.user()===null){
                setLogged(false)
            }else{
                setLogged(true)
            }
            setLoading(false)
        },1000); 
    },[]);
    if(loading){
        return(
        <Container className="text-center">
          <Row>
            <Col />
            <Col >
            <Card className="mx-5 mt-4" bg="light" text="dark" 
                  border="light" >
              <div className="text-center"><Card.Img src="/horizontal_logo.svg" style={{width:"80%"}}/></div>
              <Card.Body>
                <Card.Title as="h3">Logging in...</Card.Title>
              </Card.Body>
            </Card> 
            </Col>
            <Col />
          </Row>
        </Container>)
    }
    if(loader){
        return(<Navigate to="/login" />)
    }
    if(logged){
        return(<Navigate to="/game" />)
    }
    else{
        setTimeout(function(){
            setLoader(true)
        },5000); 
        return (
            <Container className="text-center">
            <Row>
                <Col />
                <Col >
                <Card className="mx-5 mt-4" bg="light" text="dark" 
                    border="light" >
                <div className="text-center"><Card.Img src="/horizontal_logo.svg" style={{width:"80%"}}/></div>
                <Card.Body>
                    <Card.Title as="h3">User Login failed. Redirecting to Login Page.</Card.Title>
                </Card.Body>
                </Card> 
                </Col>
                <Col />
            </Row>
            </Container>
        );
    }
}
export default UserRedirect;

