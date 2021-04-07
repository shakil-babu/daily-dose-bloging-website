import React from 'react'
import { Link } from 'react-router-dom';
import './SingleCpost.css';
const SingleCpost = ({item}) => {
    return (
        <Link style={{textDecoration:'none'}} to={`c/${item.id}`}>
            <div className='single-c-card'>
            <h6>{item.badge}</h6>
            <h2>{item.title}</h2>

            <p>{item.p2.substr(0,70)}.....</p>
            <div className="button-area">
                <button>Reading more...</button>
            </div>

            <div className="flex-recent">
                <h5>{item.date}</h5>
                <h5>Read {item.time}</h5>
            </div>
        </div>
        </Link>
    )
}

export default SingleCpost
