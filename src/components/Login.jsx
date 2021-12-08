import {Container , Row , Card , Button} from "react-bootstrap"
import { Auth } from "@supabase/ui";
import signIn from "../utils/signIn";
import supabaseClient from "../utils/supabaseClient";
import {FcGoogle} from 'react-icons/fc';
import { Navigate } from "react-router-dom"

function Login() {
    if(supabaseClient.auth.user()){
      return(<Navigate to="/game" />)
    }else{
      return (
        <Container className="text-center">
          <Row style={{height:"50vh" ,flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <Card className="mx-5 mt-4" bg="light" text="dark" 
                  border="light" style={{width:"20vw"}}>
              <div className="text-center"><Card.Img src="/horizontal_logo.svg" style={{width:"80%"}}/></div>
              <Card.Body>
                <Card.Title as="h3">Bem vindo à NEECathon 2021!!!</Card.Title>
                <Card.Text as="h4" className="mb-4">
                  Para continuar faz login
                </Card.Text>
                <Auth.UserContextProvider supabaseClient={supabaseClient}>
                  {/* <div className="d-grid gap-2" > */}
                    <Button size="lg" onClick={() => signIn(supabaseClient)}> <FcGoogle/> Login com Google</Button>
                  {/* </div> */}
                </Auth.UserContextProvider>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      );
    }
}
export default Login;

