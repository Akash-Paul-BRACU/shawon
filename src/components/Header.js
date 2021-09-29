import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
          <Navbar.Brand href="/">New Shawon Vhadow</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-5">
              <Nav.Link href="/cart" ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
              <Nav.Link href="/login"><i class="fa fa-user" aria-hidden="true"></i>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
              </Container>     
          
      </Navbar>
    </header>
  )
}

export default Header
