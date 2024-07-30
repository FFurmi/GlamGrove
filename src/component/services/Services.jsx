import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Bannar from '../bannar/Bannar';
import { useLoaderData } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const title = 'SERVICES'
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <Bannar title={title}></Bannar>
            <div className='bg-dark py-5'>
                <Container className='py-5'>
                    <h1 className='text-light text-center mb-3'>Our Services</h1>
                    <Row className=''>

                        {
                            services.map(service => (
                                <Col xs={12}  md={6} lg={4} className='mb-5' key={service.id}>
                                    <Card id="card" className='p-0 h-100 bg-dark bg-gradient border border-light'>
                                        <Card.Img className='img-fluid' variant="top" src={service.picture} />
                                        <Card.Body className='text-center my-3 text-light'>
                                            <Card.Title>{service.makeType}</Card.Title>
                                            <Card.Text>{service.description}</Card.Text>
                                            <Card.Text className='banner-text'>Price: ${service.price}</Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </div>
            <div className='bg-black bg-gradient py-5'>
                <Container className='py-5'>
                    <h1 className='text-light text-center mb-3'>Exclusive Discounts</h1>
                    <Row className=''>
                        <Col className='mb-2' xs={12} md={6}>
                            <Card className='bg-body-secondary h-100'>
                                <Card.Body>
                                    <Card.Title className='card-title mb-2'>Enjoy 10% Off Your Next Purchase</Card.Title>
                                    <Card.Text className='text-black'>All members receive a 10% discount on every purchase. Treat yourself to our luxurious range of makeup products and save on every order!</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-2' xs={12} md={6}>
                            <Card className='bg-body-secondary h-100'>
                                <Card.Body>
                                    <Card.Title className='card-title mb-2'>Group Booking Discount</Card.Title>
                                    <Card.Text className='text-black'>Planning a makeup session with friends? Book for 5 people together and each of you will receive an additional 5% discount on your services. It's the perfect way to glam up together and save more!</Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Services;