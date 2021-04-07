import React from 'react'
import './Footer.css';
import {FaFacebookSquare, FaInstagramSquare , FaGithubSquare} from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <footer className="footer-area ">
                <h1>All right reserved <mark>"DAILY DOSE"</mark></h1>
                <div className="icons-flex">
                    <a href='https://www.facebook.com/profile.php?id=100025305922873' target='_blank'> <FaFacebookSquare className='Icon' /> </a>
                    <a href='https://www.instagram.com/shakilbabupro/' target='_blank'> <FaInstagramSquare className='Icon' /> </a>
                    <a href='https://github.com/shakil-Babu/' target='_blank'> <FaGithubSquare className='Icon' /> </a>
                </div>
            </footer>   
        </>
    )
}

export default Footer
