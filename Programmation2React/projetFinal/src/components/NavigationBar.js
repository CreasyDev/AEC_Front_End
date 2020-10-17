import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img className="app-logo" alt="Les saveurs jamaicaines logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#link">
              <Button
                href="/nos-plats"
                variant="outline-warning"
                className="py-1"
              >
                Toutes nos spécialités
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
