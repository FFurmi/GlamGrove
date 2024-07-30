import React, { useState, useEffect } from 'react';
import profile from '/public/images/profile.png';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import aboutUs from '/public/images/aboutUs.png';
import { Link } from 'react-router-dom';

const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push('★');
    }
    for (let i = rating; i < 5; i++) {
        stars.push('☆');
    }
    return stars.join(' ');
};

const Home = () => {
    const [about, setAbout] = useState({});
    const [services, setServices] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
   // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = 'aboutMe.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setAbout(data));
    }, []);

    useEffect(() => {
        const url = 'services.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await fetch('feedback.json');
                const data = await response.json();
                setFeedbacks(data);
               // setIsLoading(false);
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
               // setIsLoading(false); // Handle loading state even on error
            }
        };

        fetchFeedbacks();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFeedbacks(prevFeedbacks => {
                return [...prevFeedbacks]; // Trigger re-render by setting feedbacks to the same array
            });
        }, 5000); // 5 seconds interval to remap

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <div className='bg-dark'>
                <Container className=''>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col xs={12} md={6} className="text-center text-md-start">
                            <h5 className='banner-text'>MAKE UP ARTIST</h5>
                            <h1 className='text-light banner-title '>Welcome To GlamGrove Makeup Salon</h1>
                        </Col>
                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                            <img className='d-none d-md-inline' src={profile} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='bg-dark bg-gradient py-5'>
                <Container className=''>
                    <Row className="d-flex justify-content-center align-items-center my-5">
                        <Col xs={12} md={6}>
                            <div className="position-relative">
                                <img className='img-fluid' src={aboutUs} alt="" />
                                <Button id="button" className='position-absolute top-50 start-50 translate-middle badge border rounded-circle p-5 fs-4 d-none d-md-inline'>
                                    <p>5 Years</p>
                                    <p>Experience</p>
                                </Button>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <h6 className='banner-text'>ABOUT ME</h6>
                            <h4 className='text-light'>{about.aboutMe?.welcomeMessage}</h4>
                            <Link to='/about'>
                                <Button className='fw-semibold px-4 fs-5 mt-3 rounded-pill' id="button">Learn More</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='bg-black'>
                <Container className='py-5'>
                    <h6 className='banner-text text-center mt-5'>WHAT WE DO</h6>
                    <h1 className='text-light text-center'>MAKEUP SERVICES</h1>
                    <Row xs={1} md={2} lg={4} className="g-4 mt-2">
                        {services.slice(0, 4).map(service => (
                            <Col key={service.id}>
                                <Card className='p-0 h-100 bg-dark bg-gradient'>
                                    <Card.Img variant="top" src={service.picture} />
                                    <Card.Body className='text-center my-3 text-light'>
                                        <Card.Title>{service.makeType}</Card.Title>
                                        <Card.Text>{service.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className='d-flex justify-content-center align-items-center mt-4 mb-5'>
                        <Link to='/services'>
                            <Button className='fw-semibold px-4 fs-5 mt-3 rounded-pill' id="button">See More</Button>
                        </Link>
                    </div>
                </Container>
            </div>
            <div id="feedback-container" className='bg-secondary p-5'>
                <Container>
                    <h6 className='banner-text text-center'>TESTIMONIALS</h6>
                    <h1 className='text-light text-center'>Some Users Feedback</h1>
                    <Carousel>
                        {feedbacks.map((feedback) => (
                            <Carousel.Item className='border-0' key={feedback.id}>
                                <div className="d-flex justify-content-center align-items-center feedback-info">
                                    <div className="text-center text-light">
                                        <h4 className='w-75 text-center mx-auto'>&quot; {feedback.feedback} &quot;</h4>
                                        <h5 className='text-light'>{feedback.userName}</h5>
                                        <p>Rating: {generateStars(feedback.rating)} </p>

                                        <p className='mb-4'>Date: {feedback.date}</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}


                    </Carousel>
                </Container>
            </div>
        </div>
    );
};

export default Home;
