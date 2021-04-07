import React from 'react'
import {Link } from 'react-router-dom'
import './Category.css';
const Category = () => {
    return (
            <section className="category-area">
            <div className="d-flex-me">
                <div className="under-line"></div>
                <h5>Category</h5>
                <div className="under-line"></div>
        </div>
        <div className="category">
                <Link className='a' to='/javascript'>JAVASCRIPT</Link> <br/>
                <Link className='a' to='/node'>NODE.JS</Link><br/>
                <Link className='a' to='/express'>EXPRESS.JS</Link><br/>
                <Link className='a' to='/c'>C PROGRAMMING</Link>
        </div>
            </section>   
    )
}

export default Category
