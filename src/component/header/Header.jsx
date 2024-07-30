import React, { createContext, useState, useEffect, useContext } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Navbar, NavDropdown, Container } from 'react-bootstrap';
import logo from '/public/images/logo.png'
import './Header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ActiveLink from '../activeLink/ActiveLink';
import UserContext from '../userContext/UserContext';
import { saveAppointment } from '../utilities/fakeDB';



const Header = () => {

    const { user, handleLogout } = useContext(UserContext);
    const navigate = useNavigate();

    const logoutAndRedirect = () => {
        handleLogout();
        navigate('/login'); // Redirect to login page
    };
 
    return (
        <div className='header'>

            <Navbar bg="dark" expand="lg">
                <Container className='d-flex justify-content-between align-items-center py-2'>
                    <img id='logo' className='' src={logo} alt="" />
                    <Navbar.Brand href="/">
                        <h2 className='fw-bold text-light'>GlamGrove</h2>
                    </Navbar.Brand>

                    <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <ActiveLink className='fw-semibold link text-light' to="/">Home</ActiveLink>
                            <ActiveLink className='fw-semibold link text-light' to="/about">About</ActiveLink>
                            <ActiveLink className='fw-semibold link text-light' to="/services">Services</ActiveLink>
                            <ActiveLink className='fw-semibold link text-light' to="/portfolio">Portfolio</ActiveLink>
                            <ActiveLink className='fw-semibold link text-light' to="/contact">Contact</ActiveLink>
                            {/* <Link to='/login'>
                                <Button id='button'>Login</Button>
                            </Link> */}


                            {user ? (
                                <>
                                    <Link to='/user' className="text-light link">
                                    {user.toUpperCase()}                                    
                                    </Link>
                                    <Button className='btn-logout' id="button" onClick={logoutAndRedirect}>Logout</Button>
                                </>
                            ) : (
                                <Link to='/login'>
                                    <Button id='button'>Login</Button>
                                </Link>
                            )}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;