import React from 'react'
import {FaArrowRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SingleBlog.css';
const SingleBlog = ({item, isLocation}) => {
    return (
        <>
             <Link style={{textDecoration:'none'}} 
             to={item.badge == 'JavaScript' ? `/javascript/${item.id}` : item.badge === 'Node.js' ? `/node/${item.id}` : item.badge=='Express.js' ? `/express/${item.id}`:`/c/${item.id}` }>
             
             <div className={isLocation ? 'single-blog-post':'single-blog-post shadow'}>
                <div className="card-info">
                    <h1>{item.title}</h1>
                    <h6>{item.badge}</h6>
                    <hr/>
                    <p>{item.p1}</p>
                    <div className="continue-reading">
                    <button>Continue Reading <FaArrowRight className='arrow' /></button>
                    </div>
                    <div className="flex-recent">
                    <h5>{item.date}</h5>
                    <h5>Read {item.time}</h5>
                </div>
                </div>
            </div>  

             </Link>
        </>
    )
}

export default SingleBlog
