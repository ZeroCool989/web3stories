import React from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <BootstrapNavbar className={styles.NavBar} bg="light" expand="lg">
            <Container>
                <NavLink to="/">
                    <BootstrapNavbar.Brand>
                        <img src={logo} alt="logo" height="45" />
                    </BootstrapNavbar.Brand>
                </NavLink>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/">
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin"><i className="fas fa-sign-in-alt"></i>
                            Sign in</NavLink>
                        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
                            <i className="fas fa-user-plus"></i> Sign up
                        </NavLink>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default NavBar;
