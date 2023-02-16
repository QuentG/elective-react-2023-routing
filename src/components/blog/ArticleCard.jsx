import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ article }) => {
    return (
        <div>
            <Link to={`/blog/${article.id}`} state={{ article }}>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
            </Link>
        </div>
    )
}

export default ArticleCard