import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Menu = () => {
  return (
    <div>
      <Navbar expand="lg" sticky="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/arts">Arts</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
              <Nav.Link href="/business">Business</Nav.Link>

              <Nav.Link href="/food">Food</Nav.Link>
              <Nav.Link href="/health">Health</Nav.Link>
              <Nav.Link href="/magazine">Magazine</Nav.Link>

              <Nav.Link href="/ny">New York</Nav.Link>
              <Nav.Link href="/opinion">Opinion</Nav.Link>
              <Nav.Link href="/politics">Politics</Nav.Link>

              <Nav.Link href="/realestate">Real Estate</Nav.Link>
              <Nav.Link href="/science">Science</Nav.Link>
              <Nav.Link href="/sports">Sports</Nav.Link>

              <Nav.Link href="/style">Style</Nav.Link>
              <Nav.Link href="/tech">Tech</Nav.Link>
              <Nav.Link href="/theater">Theater</Nav.Link>

              <Nav.Link href="/travel">Travel</Nav.Link>
              <Nav.Link href="/us">U.S.</Nav.Link>
              <Nav.Link href="/wolrd">World</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu