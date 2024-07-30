import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../userContext/UserContext';
import Bannar from '../bannar/Bannar';
import {  getSavedAppointment, removeUserAppointment } from '../utilities/fakeDB';
import { Button, Container } from 'react-bootstrap';

const User = () => {
    const { user} = useContext(UserContext);
    const title = `${user?.toUpperCase()}'s PROFILE `
    const [message, setMessage] = useState('')

    // let currentUser;
    // try {
    //     currentUser = getSavedAppointment(user)

    // }
    // catch (error) {
    //     console.log(error.message)
    //     setMessage("You didn't book any appointment.")
    // }

    // const handleCancelBooking = () =>{
    //     try{
    //         removeUserAppointment(user)
    //     }
    //     catch(error){
    //         console.log(error.message)
    //         setMessage("You didn't book any appointment.")
    //     }
    // }
    

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        try {
            const appointments = getSavedAppointment(user);
            setCurrentUser(appointments);
        } catch (error) {
            console.log(error.message);
            setMessage("You didn't book any appointment.");
        }
    }, [user]);

    const handleCancelBooking = () => {
        try {
            removeUserAppointment(user);
            setCurrentUser(null);
            setMessage("Your booking has been cancelled.");
        } catch (error) {
            console.log(error.message);
            setMessage("You didn't book any appointment.");
        }
    };
    return (
        <div>
            <Bannar title={title}></Bannar>
            <div className='bg-black bg-gradient py-5'>
                <Container className='text-light d-flex justify-content-center'>
                    <div>
                        <h1 className='border-bottom mb-3 pb-1'>Your Booking Details</h1>
                        {currentUser ? (
                            <div>
                                <h3 >Name: {currentUser[0]?.name}</h3>
                                <p>Phone: {currentUser[0]?.phone}</p>
                                <p>Email: {currentUser[0]?.email} </p>
                                <p>Message: {currentUser[0]?.message}</p>
                                <Button onClick={handleCancelBooking} className='btn-danger'>Cancel Booking</Button>
                            </div>
                        ) :
                            (
                                <p className='text-white'>{message || "You didn't book any appointment."}</p>
                            )
                        }
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default User;