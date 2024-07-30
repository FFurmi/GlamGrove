import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './About.css'
import Bannar from '../bannar/Bannar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheckCircle } from '@fortawesome/free-solid-svg-icons'




const About = () => {
    const title = "ABOUT US"
    const about = useLoaderData()
  // console.log(about.aboutMe.images.image1)

    return (
        <div>
            <Bannar title={title}></Bannar>
            <div className='bg-dark py-5'>
                <Container>
                    <Row className=' my-5'>
                        <Col xs={12} md={6}>
                            <img className='rounded img-fluid' src={about.aboutMe.images.image1} alt="" />
                        </Col>
                        <Col className='text-light d-flex flex-column justify-content-center' xs={12} md={6}>
                            <h2 className='my-3 mt-md-0'>My Philosophy</h2>
                            <p>{about.aboutMe?.philosophy}</p>
                            <h5 className='banner-text'>{about.aboutMe?.name}</h5>
                            <h5>Founder of GlamGrove</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='bg-dark bg-gradient  py-5'>
                <Container>
                    <Row className=' my-5'>
                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6} md={3}>
                            <h1 className='about-title'>500+</h1>
                            <h5 className='text-light'>Happy Clients</h5>
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6} md={3}>
                            <h1 className='about-title'>5</h1>
                            <h5 className='text-light'>Awards Won </h5>
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6} md={3}>
                            <h1 className='about-title'>20</h1>
                            <h5 className='text-light'>Dedicated Member</h5>
                        </Col>
                        <Col className='d-flex flex-column justify-content-center align-items-center' xs={6} md={3}>
                            <h1 className='about-title'>5+</h1>
                            <h5 className='text-light'>Years Experience</h5>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className='bg-black py-5'>
                <Container>
                    <Row className='my-5'>
                        <Col className='text-white d-flex flex-column justify-content-center' xs={12} md={6}>
                            <h2 className='mb-3'>Why Choose Me?</h2>
                            
                            {
                               Object.entries(about.aboutMe.whyChooseMe).map(([key, value], _idx)=>
                               <p key={_idx}>
                                <FontAwesomeIcon className='me-2 banner-text' icon={faCheckCircle}/>
                                {key.toUpperCase()} : {value}
                                </p>
                            )
                                
                            }
                        </Col>
                        <Col className='d-flex justify-content-center align-items-center' xs={12} md={6}>
                            <img className='rounded img-fluid' src={about.aboutMe?.images?.image2} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default About;