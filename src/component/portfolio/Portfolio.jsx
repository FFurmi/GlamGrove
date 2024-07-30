import React, { useState } from 'react';
import Bannar from '../bannar/Bannar';
import { useLoaderData } from 'react-router-dom';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import './Portfolio.css'

const Portfolio = () => {
    const title = 'PORTFOLIO'
    const portfolioData = useLoaderData()
    const [show, setShow] = useState(false);
    const [selectedData, setSelectedData] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        const data = portfolioData.find(item => item.id === id)
        setSelectedData(data)
        setShow(true)
    };

    console.log('i am selected', selectedData)
    //console.log(portfolioData)
    return (
        <div>
            <Bannar title={title}></Bannar>
            <div className='bg-black py-5'>
                <Container className='py-5'>
                    <h1 className='text-light text-center'>My Makeup Artistry Portfolio</h1>
                    <p className='text-light text-center mb-5'> With a keen eye for detail and a love for artistry, I have had the privilege of transforming countless faces into works of art</p>
                    <Row className=''  >

                        {
                            portfolioData.map(data => (
                                <Col xs={12} md={6} lg={4} className='mb-5' key={data.id}>
                                    <div className='portfolio-info p-0'>
                                        <img className='img-fluid portfolio-img rounded' src={data.picture} alt="" />

                                        <div className='portfolio-type d-flex flex-column justify-content-center align-items-center'>
                                            <h4 >{data.makeType}</h4>
                                            <Button onClick={() => handleShow(data.id)} id="button">See More</Button>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </div>

            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="custom-modal-header">
                    <Modal.Title >{selectedData?.makeType}</Modal.Title>
                    
                </Modal.Header>

                <Modal.Body className="custom-modal-body">
                    {
                        selectedData ?
                            (
                                <>
                                    <p className='text-black'>{selectedData.description}</p>
                                    <p className='text-black'><strong className='banner-text'>Customer Name:</strong> {selectedData.customerName}</p>
                                    <p className='text-black'><strong className='banner-text'>Customer Feedback:</strong> {selectedData.customerFeedback}</p>
                                </>
                            ) : (<p>Loading...</p>)
                    }
                </Modal.Body>
                <Modal.Footer className='custom-modal-footer'>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Portfolio;