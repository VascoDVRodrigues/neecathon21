import '../index.css'
import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import supabaseClient from "../utils/supabaseClient";

export default function MyNav() {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand className="text-light ">
          <img src="/horizontal_logo.svg" width="130" alt="logo"/>
        </Navbar.Brand>

        <Nav>
          <Nav.Link className="text-light" href="/game">Home</Nav.Link> 
          <Nav.Link className="text-light" href="/shop">Shop</Nav.Link>
        </Nav>
        
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown align="end" title="My Team">
            <NavDropdown.Item href="/profile">Team Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={()=>supabaseClient.auth.signOut()} href="http://localhost:3000/">Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      
      </Navbar>
    </div>
  )
}