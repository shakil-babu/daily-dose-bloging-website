import React from 'react'
import './NewsLetter.css';
const NewsLetter = () => {
    return (
        <>
            <div className="news-letter-area">
                <div className="d-flex-me">
                        <div className="under-line"></div>
                        <h5>News Letter</h5>
                        <div className="under-line"></div>
                </div>
                <input type="email" placeholder='Enter your email' />
                <button>Send</button>
            </div>   
        </>
    )
}

export default NewsLetter
