import '../index.css'
import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { Button } from "@supabase/ui";
import supabaseClient from "../utils/supabaseClient";


export default function MyNav() {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand className="text-light ">
          <img src="/horizontal_logo.svg" width="130"/>
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="text-light" href="/game">Home</Nav.Link> 
          <Nav.Link className="text-light" href="/shop">Shop</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown className="text-light" title="My Team" style={{color:"white"}}>
            <NavDropdown.Item >Team Profile</NavDropdown.Item>
            <NavDropdown.Item >Inventory</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={()=>supabaseClient.auth.signOut()} href="http://localhost:3000/">Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}