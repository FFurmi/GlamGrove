import React, { useContext, useState } from 'react';
import Bannar from '../bannar/Bannar';
import { loginUser, logoutUser, registerUser } from '../utilities/fakeDB';
import { Button, Container, Form } from 'react-bootstrap';
import UserContext from '../userContext/UserContext';




const Login = () => {
    const title = 'LOGIN / SIGN UP';
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //  const [message, setMessage] = useState('');
    const { handleLogin, handleRegister, message } = useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            handleLogin(username, password);
        } else {
            handleRegister(username, password);
        }

        // Clear the input fields after submission
        setUsername('');
        setPassword('');


    };

    

    return (
        <div>
            <Bannar title={title}></Bannar>
            <div className='bg-black py-5'>

                <Container className='d-flex justify-content-center align-items-center flex-column'>
                    <h2 className='text-light text-center'>{isLogin ? 'Log In' : 'Sign Up'}</h2>
                    <Form className='w-50' onSubmit={handleSubmit}>
                        <Form.Group className='mb-3 ' controlId="formUsername">
                            <Form.Label className='text-light'> Username</Form.Label>
                            <Form.Control className=''
                                type="text"
                                name="name"
                                placeholder="Enter Your Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className='mb-3 ' controlId="formPassword">
                            <Form.Label className='text-light'>Password</Form.Label>
                            <Form.Control className=''
                                type="password"
                                password="password"
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button id="button" type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>

                    </Form>

                    {/* <Button id="button" className='mb-3' onClick={handleLogOut}>
                        Logout
                    </Button> */}

                    <Button className='mt-3' id="button" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                    </Button>

                    {message && <p className=''>{message}</p>}

                </Container>
            </div>
        </div>
    );
};

export default Login;
