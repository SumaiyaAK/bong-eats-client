import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import './Register.css'


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    // error message
    const handleErrorClick = () => {
        setErrorMessage('Please fill the field')

    }

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('Your account has been created successfully')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password)

        // error message
        if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="register-page row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-4 justify-content-center align-items-center ">

            <Container className='registerPage w-25 mx-auto'>
                <h3>Please Register</h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Your Name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name="photo" placeholder="Your Photo" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name="accept" label="Accept Terms and Conditiobs" />
                    </Form.Group>
                    <Button onClick={handleErrorClick} className='registerBTN' variant="primary" type="submit">
                        Register
                    </Button>
                    {errorMessage && <div className="error"> {errorMessage} </div>}

                    <br></br>
                    <Form.Text className="text-success">
                        Already Have an Account? <Link to="/login">Login</Link>
                    </Form.Text>
                    <Form.Text className="text-success">
                        <p className='text-success'>{success}</p>
                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </Container>

        </div>
    );
};

export default Register;