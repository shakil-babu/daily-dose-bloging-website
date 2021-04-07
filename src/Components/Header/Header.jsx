import React from 'react'
import './Header.css';
import img from '../../img/body.svg';
import {Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
           <section className='header-area'>
                <div className="container">
                  <div className="header-row">
                      <div className="header-info">
                      <h4>Hey, There</h4>
                        <h2>Welcome to the <b>"DAILY DOSE"</b></h2>

                        <div className="btn-flex">
                            <Link to='/blogs'><button to='blogs' className='button'>Go to blogs</button></Link>
                            <p className='slash'>/</p>
                            <Link to='/javascript'><button className="button">JS</button></Link>
                            <p className='slash'>/</p>
                            <Link to='/c'><button className='button'>C</button></Link>
                        </div>
                      </div>
                      <div className="header-img">
                          <img className='bodyimg' src={img} alt=""/>
                      </div>
                  </div>
                      <p className='line'>Increase your knowledge with <mark>DAILY DOSE</mark></p>
                </div>
            </section>  
        </>
    )
}

export default Header
