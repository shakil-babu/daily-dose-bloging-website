import React from 'react'
import './About.css';
import img from '../../img/me.jpg';
import {FaFacebookSquare, FaInstagramSquare , FaGithubSquare} from 'react-icons/fa';
const About = () => {
    return (
        <>
            <section className="about-area">
                <div className="d-flex-me">
                    <div className="under-line"></div>
                    <h5>About Me</h5>
                    <div className="under-line"></div>
                </div>
                <img src={img} alt=""/>
                <p>Hey dude, This is Shakil Babu who wanna make something good. I am a JavaScript Developer also love to C++.</p>

                <div className="social-flex">
                    <a href='https://www.facebook.com/profile.php?id=100025305922873' target='_blank'> <FaFacebookSquare className='Icon' /> </a>
                    <a href='https://www.instagram.com/shakilbabupro/' target='_blank'> <FaInstagramSquare className='Icon' /> </a>
                    <a href='https://github.com/shakil-Babu/' target='_blank'> <FaGithubSquare className='Icon' /> </a>
                </div>
            </section>   
        </>
    )
}

export default About
