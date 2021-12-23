import React from 'react';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signWithGoogle } = useAuth();
  const handleGoogleSignIn = () => {
    signWithGoogle(location, navigate);
  };

  return (
    <div className="login-page">
      <div className=" loging-container mt-5 mb-5">
        <div className=" card login-section mx-auto px-3">
          <div className=" d-flex flex-column justify-content-center align-items-center h-100 text-center">
            <h3 className="fw-bold ">Account Login</h3>
            <button
              onClick={handleGoogleSignIn}
              className=" btn my-3 mx-auto media-icon"
            >
              <FcGoogle className="fs-3 me-2" /> Sign In With Google
            </button>
            <p>
              Don't have an account?{' '}
              <Link to="/register">Create an Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
