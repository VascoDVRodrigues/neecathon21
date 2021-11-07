import React, { useEffect } from "react";
import {Container , Row , Col, Card , Button} from "react-bootstrap"
import { useRealtime } from 'react-supabase'
import { Auth } from "@supabase/ui";
import LoginContainer from "./LoginContainer";
import signIn from "../utils/signIn";
import supabaseClient from "../utils/supabaseClient";

const styles = {
  neecLogo: {
    width: '70%'
  }
}

function Login() {
      return (
        <Container className="text-center" fluid>
          <Card className="mx-5 mt-4" bg="dark" text="light" 
                border="dark" >
            <div className="text-center"><Card.Img src="/horizontal_logo.svg" style={{width:"50%"}}/></div>
            <Card.Body>
              <Card.Title as="h1">Welcome to 2021 NEECATHON !!!</Card.Title>
              <Card.Text as="h2" className="mb-4">
                Please login to continue
              </Card.Text>
              <Auth.UserContextProvider supabaseClient={supabaseClient}>
                {/* <div className="d-grid gap-2" > */}
                  <Button size="lg" onClick={() => signIn(supabaseClient)}>Log in with Google</Button>
                {/* </div> */}
              </Auth.UserContextProvider>
            </Card.Body>
          </Card> 
        </Container>
      );
}
export default Login;

