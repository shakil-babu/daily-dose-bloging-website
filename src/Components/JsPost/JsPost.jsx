import React from 'react'
import { javascriptPost } from '../../utilities/Data/allPosts';
import './JsPost.css';
import SingleJsPost from './SingleJsPost/SingleJsPost';
const JsPost = (props) => {
    console.log('jsPost : '+props);
    return (
        <>
            <section className="js-post-main-area container py-5">
                <div className="area-for-item">
                    <h1>home{props.location.pathname}</h1>
                </div>
                <div className="js-post-card-area">
                    {
                        javascriptPost.map((item) => <SingleJsPost id={item.id} item={item}  />)
                    }
                </div>
            </section>   
        </>
    )
}

export default JsPost
