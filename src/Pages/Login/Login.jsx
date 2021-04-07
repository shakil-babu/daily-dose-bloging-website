import React, { useContext, useState } from 'react'
import './Login.css';
import {FaGoogle} from 'react-icons/fa';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, signInWithEmailAndPassword, signInWithGoogle } from '../SignUp/firebaseManager';
import { userContext } from '../../App';

const Login = () => {
    //userInfo
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  });

  const [emailValidate, setEmailValidate] = useState('');
  const [passValidate, setPassValidate] = useState('');
    //firebse initialize
  initializeLoginFramework();

// from context
const [loggedInUser, setLoggedInUser] = useContext(userContext);
const history = useHistory();
const location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };


   // sign in with google
   const googleSignIn = () => {
    signInWithGoogle().then((res) => {
      setUserInfo(res);
      setLoggedInUser(res);
      history.replace(from);
    });

  };


     // blurHandler
     const blurHandler = (e) => {
        if(e.target.name === 'email'){
            setUserInfo({...userInfo, email:e.target.value})
        }
        if(e.target.name === 'password'){
            setUserInfo({...userInfo, password:e.target.value})
        }
   }

   const submitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password)
    .then(res => {
      setUserInfo(res);
      setLoggedInUser(res);
      history.replace(from);
    })

    if(userInfo.email !== loggedInUser.email){
        setEmailValidate('Email not valid!')
    }

    if(userInfo.password !== loggedInUser.password){
        setPassValidate('Password not valid! ')
    }
  }

    return (
        <>
            <section className="container login-area p-4">
                <div className="login-info-area">
                <div className="d-flex-me">
                    <div className="under-line"></div>
                    <h5>Log In</h5>
                    <div className="under-line"></div>
                </div>

                <form onSubmit={submitHandler} >
                    <input onBlur={blurHandler} name='email' type="email" placeholder='Email' /> <br/>
                    <p style={{color:'red'}}>{emailValidate}</p>
                    <input onBlur={blurHandler} name='password' type="password" placeholder='Password'/>
                    <p style={{color:'red'}}>{passValidate}</p>
                    <button type='submit' className='login-btn'>Login</button>
                </form>
                <div className="flex-login-info">
                    <p>Don't have any account ? </p>
                    <Link to='/signup' className='create' >Create an account</Link>
                </div>
                </div>
                <div className="d-flex-me my-3">
                    <div className="under-line"></div>
                    <h5>or</h5>
                    <div className="under-line"></div>
                </div>

                <button onClick={googleSignIn} className='google '>Sign in with Google <FaGoogle className='icon' /> </button>

            </section>   
        </>
    )
}

export default Login
