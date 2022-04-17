import React from 'react';
import google from '../../images/social/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='text-center m-3'>
                <button className='btn border btn-sm form-control'>
                    <img style={{ height: "30px", width: "30px" }} src={google} alt="" />
                    <span className='ms-1'>Continue With Google</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;