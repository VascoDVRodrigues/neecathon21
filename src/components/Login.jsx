import React, { useEffect } from "react";
import {Container , Row , Col} from "react-bootstrap"
import { useRealtime } from 'react-supabase'
import { Auth } from "@supabase/ui";
import { Button } from "@supabase/ui";
import LoginContainer from "./LoginContainer";
import signIn from "../utils/signIn";
import supabaseClient from "../utils/supabaseClient";

function Login() {
      return (
        <div>
        <Auth.UserContextProvider supabaseClient={supabaseClient}>
          <LoginContainer supabaseClient={supabaseClient}>
            
          </LoginContainer>
          <Button onClick={() => signIn(supabaseClient)}>Log in</Button>
        </Auth.UserContextProvider>
        </div>
      );
}
export default Login;