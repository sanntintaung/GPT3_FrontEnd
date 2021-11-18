import React from 'react';
import './article.css'

const Article = ({img,date,title}) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-img">
                <img src={img} alt=""/>
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read more</p>
            </div>
        </div>
    );
};

export default Article;