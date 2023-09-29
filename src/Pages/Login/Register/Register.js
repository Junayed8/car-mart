import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
   const [agree, setAgree]= useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true}); 

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  

    const navigate= useNavigate();
    const navigateLogin= ()=>{
      navigate('/login');

    }
    if(loading){
        return <Loading></Loading>
    }

    if(user){
        navigate('/home');
    }

    const handleRegister= async (event)=>{
        event.preventDefault();
        const name= event.target.name.value;
        const email= event.target.email.value;
        const password= event.target.password.value;
        // const agree= event.target.terms.checked;
        await  createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName : name});
        alert ('Updated Profile');
    }
    return (
        <div>
            <h2 style={{textAlign:'center'}}>Register!!!!!!</h2>
            <form className='register-form' onSubmit={handleRegister}>
                <input type='text' name='name' id='' placeholder='Your name' required/>
                <br/>
                <input type='email' name='email' id='' placeholder='Your email' required/>
                <br/>
                <input type='password' name='password' id='' placeholder='Password' required/>
                <input onClick={()=> setAgree(!agree)} type='checkbox' name='terms' id='terms'/>
                <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor='terms'>Accept car-mart terms and conditions</label>
                <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2' type='submit' value="Register"/>
            </form>
            <p>Already Register? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please login</Link> </p>
        
        </div>
    );
};

export default Register;