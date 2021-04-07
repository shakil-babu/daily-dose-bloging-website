import React from 'react'
import { cPost } from '../../utilities/Data/allPosts';
import './Cpost.css';
import SingleCpost from './SingleCpost/SingleCpost';
const Cpost = () => {
    return (
        <>
            <section className="c-post-main-area bg-light">
                <div className="container py-5 ">

                    <div className="cpost-area-location">
                        <h1>Home / C</h1>
                    </div>



                    <div className="c-post-grid-layout">
                        {
                            cPost.map(item => <SingleCpost item={item} />)
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default Cpost
