import { useState } from 'react'
import { supabase } from './supabaseclient'

export default function Auth() {
  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google'
    });
  }
  
  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <button onClick={()=>signInWithGoogle()}>Login</button>
      </div>
    </div>
  )
}