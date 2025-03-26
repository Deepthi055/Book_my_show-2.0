import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png"; // Import your logo from the assets folder

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark full-width-navbar">
      <Container fluid>
        {/* Logo and Brand Name */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="BookMyShow Logo"
            height="40" // Adjust height as needed
            className="me-2" // Adds spacing between logo and text
          />
          <span className="text-white fw-bold">BookMyShow-2.0</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <Nav.Link href="/offers">Offers</Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search movies" className="me-2" />
            <Button variant="outline-light">Search</Button>
          </Form>

          {/* Sign In */}
          <Nav>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
