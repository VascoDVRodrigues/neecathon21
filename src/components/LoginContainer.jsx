import React , {useEffect, useState} from "react";
import {Container , Row , Col} from "react-bootstrap"
import { useRealtime } from 'react-supabase'
import { Auth } from "@supabase/ui";
import { Button } from "@supabase/ui";


function LoginContainer(props) {
    const { user } = Auth.useUser();
    
    if (user)
      return (
        <>
          <h1>Hello {user.identities[0].identity_data.full_name}!</h1>
          <Button onClick={() => props.supabaseClient.auth.signOut()}>
            Sign out
          </Button>
        </>
      );
    else
    return (null)  
}
export default LoginContainer;