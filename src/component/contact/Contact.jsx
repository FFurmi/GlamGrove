import React, { useState } from 'react';
import Bannar from '../bannar/Bannar';
import { Container, Row, Col, Button , Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faClock, faMessage } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'
import contactPageImg from '/public/images/contactPageImg.jpg'
import { saveAppointment } from '../utilities/fakeDB';


const Contact = () => {
    const title = 'CONTACT'

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            saveAppointment(formData);
            setMessage('Appointment booked successfully!');
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (error) {
            setMessage(error.message);
        }
    };
    return (
        <div>
            <Bannar title={title}></Bannar>
            <div className='bg-dark py-5'>
                <Container className='py-5'>
                    <Row>
                        <Col className='d-flex justify-content-center align-items-center h-100' xs={12} md={4}>
                            <div className='me-3'> <FontAwesomeIcon className='contact-icon' icon={faMap} /></div>
                            <div>
                                <h3 className='banner-text'>OFFICE ADDRESS</h3>
                                <p>The Mall, Luton, Lu1</p>
                                <p>United Kingdom</p>
                            </div>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-center h-100' xs={12} md={4}>
                            <div className='me-3'> <FontAwesomeIcon className='contact-icon' icon={faClock} /></div>
                            <div>
                                <h3 className='banner-text'>WORKING HOURS</h3>
                                <p>Monday to Friday: 09:00 - 18:30</p>
                                <p>Saturday: 11:00 - 15:30</p>
                            </div>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-center h-100' xs={12} md={4}>
                            <div className='me-3'> <FontAwesomeIcon className='contact-icon' icon={faMessage} /></div>
                            <div>
                                <h3 className='banner-text'>MESSAGE US</h3>
                                <p>glamgrove@gmail.com</p>
                                <p>+44071111111</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='bg-black bg-gradient py-5'>
                <Container className=''>
                    <Row>
                    <Col className='d-flex justify-content-center ' xs={12} md={6}>
                        <img className='img-fluid rounded' src={contactPageImg} alt="" />
                    </Col>
                    <Col className='d-flex justify-content-center flex-column' xs={12} md={6}>
                        <h1 className="my-4 text-light">Make an Appointment</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3 ' controlId="formName">
                                
                                <Form.Control className='input-field'
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className='mb-3' controlId="formPhone">
                                
                                <Form.Control className='input-field'
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className='mb-3' controlId="formEmail">
                            
                                <Form.Control className='input-field '
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className='mb-3' controlId="formMessage">
                                
                                <Form.Control className='input-field-msg'
                                    as="textarea"
                                    name="message"
                                    rows={4}
                                    placeholder="Enter your message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button id='button' type="submit" className="mt-3">
                                Submit
                            </Button>
                        </Form>
                      {  message && <p className="mt-3 text-light">{message}</p>}
                    </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;