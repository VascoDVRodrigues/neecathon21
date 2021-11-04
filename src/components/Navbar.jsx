import '../index.css'
import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

export default function MyNav() {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand className="text-light ">
          <img src="/horizontal_logo.svg" width="130"/>
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="text-light" href="/home">Home</Nav.Link> 
          <Nav.Link className="text-light" href="/shop">Shop</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown className="text-light" title="My Team" style={{color:"white"}}>
            <NavDropdown.Item >Team Profile</NavDropdown.Item>
            <NavDropdown.Item >Inventory</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}