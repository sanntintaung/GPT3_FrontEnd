import React from 'react';
import Article from "../../Components/article/Article";
import { blog1,blog2,blog3,blog4,blog5 } from './imports';
import './blog.css'

const data = {
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us explore how it is?'
}
const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening,<br/>We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-groupA">
                    <Article img={blog1} date={data.date} title={data.title}/>
                </div>
                <div className="gpt3__blog-groupB">
                    <Article img={blog2} date={data.date} title={data.title}/>
                    <Article img={blog3} date={data.date} title={data.title}/>
                    <Article img={blog4} date={data.date} title={data.title}/>
                    <Article img={blog5} date={data.date} title={data.title}/>
                </div>
            </div>
        </div>
    );
};

export default Blog;