import React from 'react'
import { Link } from 'react-router-dom'

const RPost = ({item, path}) => {
    return (
        <>
            <Link style={{textDecoration:'none'}} to={`${path}/${item.id}`}>
            <div className="recent-area-post">
                <h6 style={{fontSize:'15px !important', color:'white'}}>{item.title}</h6>
                <div className="flex-recent">
                    <h5>{item.date}</h5>
                    <h5>Read {item.time}</h5>
                </div>
            </div>  
            </Link>
        </>
    )
}

export default RPost
