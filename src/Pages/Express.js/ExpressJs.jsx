import React from 'react'
import { expressjsPost } from '../../utilities/Data/allPosts'
import SingleExpress from './SingleExpress/SingleExpress'
const ExpressJs = () => {
    return (
        <>
            <section className="nodejs-area py-5 container">
            <div className="area-for-item">
                <h1>home / Express</h1>
            </div>

            <div className="node-grid">
                {
                expressjsPost.map((item) => <SingleExpress item={item} />)
                }
            </div>
            </section>    
        </>
    )
}

export default ExpressJs
