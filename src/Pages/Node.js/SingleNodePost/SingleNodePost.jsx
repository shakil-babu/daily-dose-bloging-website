import React from 'react'
import {FaArrowRight, FaDatabase} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SingleNodePost.css';
const SingleNodePost = ({item}) => {
    return (
        <>
            <Link style={{textDecoration:'none'}} to={`/node/${item.id}`}>
            <div className="post-card">
                <div className="post-title-box">
                    <h3>{item.title}</h3>
                </div>
                <h5 className='badgeDesign'>{item.badge}</h5>
                <hr/>
                <p>{item.p1.substr(0,130)}...</p>
                <div className="continue">
                    <button>Continue Reading <FaArrowRight className='arrow' /></button>
                </div>
                <hr/>
                <div className="date-time">
                    <h5> <FaDatabase/> {item.date}</h5>
                    <h5>Read {item.time}</h5>
                </div>
            </div>
            </Link>
        </>
    )
}

export default SingleNodePost
