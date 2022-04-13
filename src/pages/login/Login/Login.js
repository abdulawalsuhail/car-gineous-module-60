import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()


    const navigateRegister = () => {
        navigate('/register')
    }
    if (user) {
        navigate('/')
    }
    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value


        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-primary text-center pt-2'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Genius car? <Link to='/register' className='text-danger' onClick={navigateRegister}>Please Register</Link> </p>
        </div>
    );
};

export default Login;