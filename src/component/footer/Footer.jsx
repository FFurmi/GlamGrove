import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '/public/images/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark py-5'>
            <Container className=''>
                <Row>
                    <Col className='text-center text-md-start mb-3 mb-md-0' xs={12} md={6} lg={3}>
                        <div className='d-flex align-items-center justify-content-center justify-content-md-start m-0 p-0'>
                            <img id='logo' className='' src={logo} alt="" />
                            <h4 className='text-light'>GlamGrove</h4>
                        </div>

                        <p className='mt-3 footer-text'>GlamGrove Makeup Salon offers top-notch makeup services for all occasions. With over 5 years of experience, we ensure you look your best for any event.</p>
                    </Col>
                    <Col className='text-center text-md-start mb-3 mb-md-0'  xs={12} md={6} lg={3}>

                        <h4 className='text-light mt-2 mb-3'>Our Links</h4>
                        <div className='d-flex flex-column'>
                            <Link className='footer-link' to="/">Home</Link>
                            <Link className='footer-link' to="/about">About</Link>
                            <Link className='footer-link' to="/services">Services</Link>
                            <Link className='footer-link' to="/portfolio">Portfolio</Link>
                            <Link className='footer-link' to="/contact">Contact</Link>
                        </div>
                    </Col>
                    <Col className='text-center text-md-start mb-3 mb-md-0'  xs={12} md={6} lg={3}>

                        <h4 className='text-light mt-2 mb-3'>Services</h4>
                        <div className='d-flex flex-column'>
                        
                            <Link className='footer-link' >FAQ</Link>
                            <Link className='footer-link' >Support</Link>
                            <Link className='footer-link' >Privacy</Link>
                            <Link className='footer-link' >Terms & Condition</Link>
                            
                        </div>
                    </Col>
                    <Col className='text-center text-md-start '  xs={12} md={6} lg={3}>

                        <h4 className='text-light mt-2 mb-3'>Our Contact</h4>
                        <div className='d-flex flex-column'>
                            <p className='contact-info '>
                            <FontAwesomeIcon className='me-2' icon={faLocationDot} />
                                <span className='footer-text'>The Mall, Luton, Lu1</span>
                            </p>
                            <p className='contact-info'>
                                <FontAwesomeIcon className=' me-2' icon={faPhone}/>
                                <span className='footer-text'>+44071111111</span>
                            </p>
                            <p className='contact-info'>
                                <FontAwesomeIcon className=' me-2' icon={faEnvelope}/>
                                <span className='footer-text'>glamgrove@gmail.com</span>
                            </p>
                        
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Footer;