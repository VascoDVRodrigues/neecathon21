import { useState, useEffect } from 'react'
import { supabase } from './supabaseclient'

export default function Account(session) {
  return (
      <div>
        <h1>{session.session.user.user_metadata.full_name}</h1>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
  )
}