import React from 'react';
import google from '../../images/social/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading'
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const signInWithGoogleHandler = () => {
        signInWithGoogle()
        console.log("Hello")

    }
    if (loading) {
        return <Loading></Loading>

    }
    if(user){
        navigate(from, { replace: true });

    }
    console.log(error)
    return (
        <div>
            <div className='text-center m-3'>
                <button onClick={signInWithGoogleHandler} className='btn border btn-sm form-control'>
                    <img style={{ height: "30px", width: "30px" }} src={google} alt="" />
                    <span className='ms-1'>Continue With Google</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;