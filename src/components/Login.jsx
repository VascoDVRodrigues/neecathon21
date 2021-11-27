import React, { useEffect } from "react";
import {Container , Row , Col, Card , Button} from "react-bootstrap"
import { Auth } from "@supabase/ui";
import signIn from "../utils/signIn";
import supabaseClient from "../utils/supabaseClient";
import {FcGoogle} from 'react-icons/fc';
import { Route, Navigate, useLocation } from "react-router-dom"

function Login() {
    if(supabaseClient.auth.user()){
      return(<Navigate to="/game" />)
    }else{
      return (
        <Container className="text-center">
          <Row>
            <Col />
            <Col >
            <Card className="mx-5 mt-4" bg="light" text="dark" 
                  border="light" >
              <div className="text-center"><Card.Img src="/horizontal_logo.svg" style={{width:"80%"}}/></div>
              <Card.Body>
                <Card.Title as="h3">Welcome to 2021 NEECATHON !!!</Card.Title>
                <Card.Text as="h4" className="mb-4">
                  Please login to continue
                </Card.Text>
                <Auth.UserContextProvider supabaseClient={supabaseClient}>
                  {/* <div className="d-grid gap-2" > */}
                    <Button size="lg" onClick={() => signIn(supabaseClient)}> <FcGoogle/> Log in with Google</Button>
                  {/* </div> */}
                </Auth.UserContextProvider>
              </Card.Body>
            </Card> 
            </Col>
            <Col />
          </Row>
        </Container>
      );
    }
}
export default Login;

