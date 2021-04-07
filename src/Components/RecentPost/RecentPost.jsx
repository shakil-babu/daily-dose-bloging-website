import React, { useState } from 'react'
import { allRandomData } from '../../utilities/Data/allPosts'
import Recent from './Recent/Recent';
const RecentPost = () => {
    const sixData = allRandomData.slice(0,6).sort((a,b) => Math.random() - 0.5);
    const [data, setData] = useState(sixData);
    return (
        <>
            <section className='recent-area pb-4'>
            <div className="d-flex-me">
                    <div className="under-line"></div>
                    <h5>Most Views</h5>
                    <div className="under-line"></div>
            </div>
                {
                    data.map((data) => <Recent id={data.id} post={data} />)
                }
            </section>   
        </>
    )
}

export default RecentPost
