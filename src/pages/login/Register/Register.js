import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const userNameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')
    const navigate = useNavigate()


    const handleNavigateLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }

    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2>Please Register</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={userNameRef} type="name" placeholder="Enter Full Name" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to='/login' className='text-danger' onClick={handleNavigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;