import React from 'react'
import { nodejsPost } from '../../utilities/Data/allPosts';
import './NodeJs.css';
import SingleNodePost from './SingleNodePost/SingleNodePost';
const NodeJs = (props) => {
    return (
        <>
            <section className="nodejs-area py-5 container">
            <div className="area-for-item">
                    <h1>home {props.location.pathname}</h1>
            </div>


                <div className="node-grid">
                    {
                        nodejsPost.map((item) => <SingleNodePost item={item} />)
                    }
                </div>
            </section>   
        </>
    )
}

export default NodeJs
