import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const emailRef = useRef('');
 const passwordRef = useRef('');
 const navigate= useNavigate();
 const location= useLocation();
 let errorElement;
let from = location.state?.from?.pathname || '/';
 const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);  

if(user){
navigate(from, {replace:true});
}

if (loading) {
    return <p>Loading...</p>;
  }

if (error) {
    errorElement =
      <div>
        <p className='text-danger'>Error: {error?.message}</p>
      </div>
}

const handleSubmit=event=>{
    event.preventDefault();
    const email= emailRef.current.value;
    const password= passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
}

const navigateRegister= event=>{
    navigate('/register');
}

const resetPassword= async ()=>{
    const email= emailRef.current.value;
    if(email){
        await sendPasswordResetEmail(email);
        toast ('Sent email');
    }
}

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center'>Please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary d-block mb-2 mx-auto" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to car mart? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset your password</button> </p>
            <SocialLogIn></SocialLogIn>
            <ToastContainer/>
        </div>
    );
};

export default Login; 