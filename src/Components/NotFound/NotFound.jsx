import React from 'react'
import { Link } from 'react-router-dom';
import img from '../../img/404.svg';
import './NotFound.css';
const NotFound = () => {
    return (
        <>
            <div className="container">
               <div className="notfound-area py-5">
                     <img src={img} alt=""/>
                    <Link className='gotohome' to='/'>Go to home</Link>
               </div>
            </div>   
        </>
    )
}

export default NotFound
