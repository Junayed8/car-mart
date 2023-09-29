import React from 'react';
import Google from '../../../images/google1.jpeg';
import Facebook from '../../../images/facebook.png';
import Github from '../../../images/git.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate= useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement =
          <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
          </div>
    }

    if (loading || loading1) {
        return <Loading></Loading>
      }

    if(user || user1){
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex allign-items-center'>
            <div style={{height:'2px'}} className='bg-primary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{height:'2px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className='border'>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{width: '30px'}} src={Google} alt=''/>
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{width: '30px'}} src={Facebook} alt=''/>
                    <span className='px-2'> Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{width: '30px'}} src={Github} alt=''/>
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;