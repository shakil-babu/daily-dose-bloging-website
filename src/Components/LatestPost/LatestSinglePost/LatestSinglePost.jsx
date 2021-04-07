import React from 'react'
import './LatestSinglePost.css';
import {FaArrowRight, FaDatabase} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const LatestSinglePost = ({post}) => {

    return (
        <>
            <Link style={{textDecoration:'none'}} 
            to={post.badge == 'JavaScript' ? `/javascript/${post.id}` : post.badge === 'Node.js' ? `/node/${post.id}` : post.badge=='Express.js' ? `/express/${post.id}`:`/c/${post.id}` }>
            
            
            <div className="post-card">
                <div className="post-title-box">
                    <h3>{post.title}</h3>
                </div>
                <h5 className='badgeDesign'>{post.badge}</h5>
                <hr/>
                <p>{post.p1.substr(0,150)}...</p>
                <div className="continue">
                    <button>Continue Reading <FaArrowRight className='arrow' /></button>
                </div>
                <hr/>
                <div className="date-time">
                    <h5> <FaDatabase/> {post.date}</h5>
                    <h5>Read {post.time}</h5>
                </div>
            </div>
            </Link>
        </>
    )
}

export default LatestSinglePost
