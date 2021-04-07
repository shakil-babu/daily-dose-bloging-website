import React from 'react'
import {allRandomData } from '../../utilities/Data/allPosts'
import SingleBlog from './SingleBlog/SingleBlog';
import './Blogs.css';
const Blogs = (props) => {
    const isLocation = props.isLocation ;
    return (
        <>
            <section className="all-blogs container py-5">

            {
                isLocation ? (
                    <div className="area-for-item">
                    <h1>home / Blogs</h1>
                    </div>
                ):(
                    <div className="blog-title">
                        <h1>All Posts</h1>
                        <div className="underline"></div>
                    </div>
                )
            }


            <div className="blogs-grid">
                {allRandomData.map((item) => <SingleBlog id={item.id} item={item} isLocation={isLocation} /> ) }
            </div>
            </section>   
        </>
    )
}

export default Blogs
