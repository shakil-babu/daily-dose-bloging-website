import React from 'react'
import Blogs from '../../Pages/Blogs/Blogs';
import About from '../About/About';
import Category from '../Category/Category';
import LatestPost from '../LatestPost/LatestPost';
import NewsLetter from '../NewsLetter/NewsLetter';
import RecentPost from '../RecentPost/RecentPost';
import './PostUI.css';
const PostUI = () => {
    return (
        <>
            <section className="post-ui-area">
                <div className="container post-ui-structure">
                    {/* for posts */}
                    <div className="all-posts">
                        <LatestPost/>
                        <Blogs isLocation = {false}/>
                    </div>







                    {/* for about category */}
                    <div className="about-category">
                        <About></About>
                        <Category/>
                        <RecentPost/>
                        <NewsLetter/>
                    </div>

                </div>
            </section>   
        </>
    )
}

export default PostUI
