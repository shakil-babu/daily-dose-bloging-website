import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams } from 'react-router';
import { cPost } from '../../utilities/Data/allPosts';
import About from '../../Components/About/About';
import Category from '../../Components/Category/Category';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import RelatedPost from '../../Components/RelatedPost/RelatedPost';
const CDetails = (props) => {
    const {postId} = useParams();
    const FindPost = cPost.find((item) => item.id === postId); 
    return (
        <>
            <section className="cDetails-post-area">
                <div className="container">
                 {/* title */}
                 <div className="js-post-title-area mt-4">
                    <h6>{FindPost.title}</h6>
                </div>

                                {/* flex area */}
                                <div className="js-post-ui-grid-layout mb-4">
                    <div className="js-post-details p-4">

                    <div className="flex-recent">
                        <h5>{FindPost.date}</h5>
                        <h5>Read {FindPost.time}</h5>
                    </div>
                <div className="underline-js-post">
                <h6>{FindPost.id}</h6>
                <div className="underline"></div>
                </div>
                    <p>{FindPost.p1}</p>
                    <p>{FindPost.p2}</p>

                    <h3>{FindPost.example}:</h3>
                    <p>1.{FindPost.p3}</p>
                    <SyntaxHighlighter language="javascript" style={dracula}>
                            {FindPost.c1}
                    </SyntaxHighlighter>

                    <p>2. Output</p>
                    <SyntaxHighlighter language="javascript" style={dracula}>
                        {FindPost.c2}
                    </SyntaxHighlighter>


                    <div className="d-flex-me mt-5">
                    <div className="under-line"></div>
                    <h5>End</h5>
                    <div className="under-line"></div>
                </div>

                </div>

                    <div className="about-category py-5 px-3">
                        <About/>
                        <Category/>
                        <RelatedPost language='c' ID={FindPost.id} />
                        <NewsLetter/>
                    </div>
                </div>
                </div>
            </section>   
        </>
    )
}

export default CDetails
