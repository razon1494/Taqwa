import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
const NavigationBar = () => {
    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand to='/home'>
                <h2>Taqwa Islamic Center</h2>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <NavLink className='nav-items fs-5 px-5  py-2 fw-bold text-dark' to='/home'>Home</NavLink>
      <NavLink className='nav-items fs-5 px-5  py-2 fw-bold text-dark' to="/about">About</NavLink>
      <NavLink className='nav-items fs-5 px-5  py-2 fw-bold text-dark' to="/courses">Premium Courses</NavLink>
      <NavLink className='nav-items fs-5 px-5  py-2 fw-bold text-dark' to="/quran">Learn Quran Free</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default NavigationBar;