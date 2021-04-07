import React, { useContext, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userContext } from '../../App';
import { createUserWithEmailAndPassword, initializeLoginFramework, signInWithGoogle } from './firebaseManager';

const SignUp = () => {
    const [erros, setErros] = useState({name:"", email:"",password:""})
    const [emailError, setEmailError] = useState(false);
//userInfo
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

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
       if(e.target.name === 'name'){
        setUserInfo({...userInfo, name:e.target.value })
       }
       if(e.target.name === 'email'){
        var emailValidate = /\S+@\S+\.\S+/.test(e.target.value);
        if(emailValidate){
            setUserInfo({...userInfo, email:e.target.value})
            setEmailError(false);
        }else{
            setErros({...erros, email:'Email is not Valid!'})
            setEmailError(true)
        } 
           
       }
       if(e.target.name === 'password'){
           setUserInfo({...userInfo, password:e.target.value})
       }
  }

  console.log(userInfo)

    // submitHandler
    const submitHandler = (e) => {
        e.preventDefault();
          createUserWithEmailAndPassword(userInfo.name, userInfo.email, userInfo.password)
          .then(res => {
            setUserInfo(res);
          setLoggedInUser(res);
          history.replace(from);
          })
        }
    

    return (
        <>
             <section className="container login-area p-4">
                <div className="login-info-area">
                <div className="d-flex-me">
                    <div className="under-line"></div>
                    <h5>Sign Up</h5>
                    <div className="under-line"></div>
                </div>

              <form onSubmit={submitHandler}>
                    <input onBlur={blurHandler} name='name' type="Name" placeholder='Name' /> <br/>
                    <input onBlur={blurHandler} name='email' type="email" placeholder='Email' /> <br/>
                    {setEmailError ? <h6 style={{color:'red', float: 'left'}}>{erros.email}</h6>:''}
                    <input onBlur={blurHandler} name='password' type="password" placeholder='Password'/>
                    <button type='submit' className='login-btn'>Sign Up</button>
              </form>

                <div className="flex-login-info">
                    <p>Alreay have an account ?  </p>
                    <Link to='/login' className='create' >Login</Link>
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

export default SignUp
