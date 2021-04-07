import React from 'react'
import { cPost, expressjsPost, javascriptPost, nodejsPost } from '../../utilities/Data/allPosts';
import './RelatedPost.css';
import RPost from './RPost';
const RelatedPost = ({language, ID}) => {
    const eFilter = expressjsPost.filter(item => item.id !== ID);
    const nFilter = nodejsPost.filter(item => item.id !== ID);
    const jFilter = javascriptPost.filter(item => item.id !== ID);
    const cFilter = cPost.filter(item => item.id !== ID);
    return (
        <>
            <div className="related-post-area">
                <div className="d-flex-me">
                    <div className="under-line"></div>
                    <h5>Related</h5>
                    <div className="under-line"></div>
                </div>

                {
                    language === 'Express.js' ? (
                        <div className="realted">
                            {
                                eFilter.map(item => <RPost item={item} path='/express' />)
                            }
                        </div>
                    ):language === 'Node.js' ? (
                        <div className="realted">
                         {
                                nFilter.map(item => <RPost item={item} path='/node' />)
                        }
                        </div>
                    ):language === 'JavaScript' ? (
                        <div className="realted">
                         {
                            jFilter.map(item => <RPost item={item} path='/javascript' />)
                        }
                        </div>
                    ):(
                        <div className="realted">
                         {
                            cFilter.map(item => <RPost item={item} path='/c' />)
                        }
                        </div>
                    )
                }
            </div>   
        </>
    )
}

export default RelatedPost
