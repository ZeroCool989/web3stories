import React from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <BootstrapNavbar bg="light" expand="lg">
            <Container>
                <BootstrapNavbar.Brand>
                    <img src={logo} alt="logo" height="45" />
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link><i className="fas fa-home"></i>Home</Nav.Link>
                        <Nav.Link><i className="fas fa-sign-in-alt"></i>Sign in</Nav.Link>
                        <Nav.Link><i className="fas fa-user-plus"></i>Sign up</Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default NavBar;