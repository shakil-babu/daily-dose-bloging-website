import React from 'react'
import { Link } from 'react-router-dom';
import './Recent.css';
const Recent = ({post}) => {
    return (
        <>
            <Link 
            to={post.badge === 'JavaScript' ? `/javascript/${post.id}` : post.badge === 'Node.js' ? `/node/${post.id}` : post.badge=='Express.js' ? `/express/${post.id}`:`/c/${post.id}` }>
            <div className="recent-area-post">
                <h5 className='h5'>{post.title}</h5>
                <div className="flex-recent">
                    <h5>{post.date}</h5>
                    <h5>Read {post.time}</h5>
                </div>
            </div>  
            </Link>
        </>
    )
}

export default Recent
