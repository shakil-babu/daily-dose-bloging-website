import React, { useState } from 'react'
import { allRandomData } from '../../utilities/Data/allPosts';
import './LatestPost.css';
import LatestSinglePost from './LatestSinglePost/LatestSinglePost';

const LatestPost = () => {
    const tenPosts = allRandomData.slice(0,7);
    const [post , setPost] = useState(tenPosts);
    return (
        <>
            <div className="lates-full-area py-3">
            <h3>Latest Posts:</h3>
            <div className="underline-lates-post"></div>
            <section className="latest-post-area">

                
                {
                    post.map((singlePost) => <LatestSinglePost post={singlePost}/>)
                }

            </section> 
            </div>  
        </>
    )
}

export default LatestPost
