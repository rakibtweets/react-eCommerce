import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css';
import {
  FaSearchLocation,
  FaSignInAlt,
  FaStore,
  FaTags,
  FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const { user, userLogOut } = useAuth();
  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        className="navbar__container"
      >
        <Container>
          <Navbar.Brand href="#home" className="">
            <FaStore size="1.4em" /> React eCommerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                {' '}
                <FaTags /> Products
              </Nav.Link>
              <NavDropdown title="Catecogies" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Electronic
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Home Appliances
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Fashion</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Travel</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Uncategorized
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#tracking">
                {' '}
                <FaSearchLocation />
                Tracking
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard">
                {' '}
                DashBoard
              </Nav.Link>
            </Nav>
            {!user.email ? (
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/login">
                  <FaSignInAlt /> Login
                </Nav.Link>
                <Nav.Link href="#register">
                  <FaUser />
                  Register
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="text-center d-lg-flex align-items-lg-center">
                <Nav.Link className="mx-2">
                  {user?.displayName}{' '}
                  <button
                    onClick={userLogOut}
                    className="btn btn-danger text-white rounded-pill px-3 py-1"
                  >
                    Log Out
                  </button>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
