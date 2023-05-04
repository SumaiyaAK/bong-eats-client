import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
const Login = () => {
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate()
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if(email != password){
            setError('Email and password does not match')
        }


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message)
            })

    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }


    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-4 justify-content-center align-items-center mt-8">
            <Container className='w-25 mx-auto '>
                <h3>Please Login</h3>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                    <Button className='w-75' variant="primary" type="submit">
                        Login
                    </Button>

                    <p className='text-danger'>{error}</p>

                    

                    <div className='align-items-center mt-4' >
                        <Button onClick={handleGoogleSignIn} className='w-75' variant="primary"> <FaGoogle></FaGoogle>Login with Google</Button>
                    </div>
                    <div className='mt-4'>
                        <Button onClick={handleGitHubSignIn} className='w-75' variant="secondary"> <FaGithub></FaGithub> Login with GitHub</Button>
                    </div>
                    <br></br>
                    <Form.Text className="text-success">
                        Don't Have an Account? <Link to="/register">Register</Link>
                    </Form.Text>
                    <Form.Text className="text-success">
                        
                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Login;