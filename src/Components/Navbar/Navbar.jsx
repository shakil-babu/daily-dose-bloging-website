import React, { useContext, useState } from 'react'
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import 'bootstrap/js/src/collapse';
import { userContext } from '../../App';
const Navbar = () => {
    const activeNav = {
        color: '#00bfa6',
        borderTop: '2px solid #00bfa6'
    }

    const [show, setShow] = useState(false);
    const showNav = () => {
        setShow(!show);
    }

      // from context
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const signOut = () => {
    setLoggedInUser({});
}
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <div className="nav-item-flex">
                <NavLink to='/' className="navbar-brand" href="#">Daily Dose</NavLink>
                </div>
                <button onClick={showNav} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={show? 'block collapse navbar-collapse':'collapse navbar-collapse'} >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <NavLink active={activeNav} to='/' className="nav-link-a" href="#">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeStyle={activeNav} to='/blogs' className="nav-link-a" href="#">Blogs</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeStyle={activeNav} to='/javascript' className="nav-link-a" href="#">JavaScript</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeStyle={activeNav} to='/node' className="nav-link-a" href="#">Node</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeStyle={activeNav} to='/express' className="nav-link-a" href="#">Express</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeStyle={activeNav} to='/c' className="nav-link-a" href="#">C</NavLink>
                    </li>
                    {
                        loggedInUser.email ? (
                            <>
                                <li className="nav-item item">
                                    <button onClick={signOut} className='loginBtn'>Sign Out</button>
                                </li>
                            </>
                        ):(
                        <>
                            <li className="nav-item item">
                            <NavLink to='/login' className='loginBtn'>Login</NavLink>
                            </li>
                        <li className="nav-item ml-lg-2 signup">
                         <NavLink to='/signup' className='loginBtn'>Sign Up</NavLink>
                        </li>
                    </>
                        )
                    }
                    <li className="nav-item mt-3">{loggedInUser.name && <p style={{marginLeft:'5px'}}>{loggedInUser.name}</p>}</li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar
