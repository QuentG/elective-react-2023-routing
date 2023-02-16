import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ArticleCard from '../../components/blog/ArticleCard'

const Blog = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [articles, setArticles] = useState([])

    const getArticles = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        const data = await response.json()
        setArticles(data)
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <div>
            <Link to='/blog/toto' state={{ prevPage: location.pathname }}>Blog toto</Link>
            <h1>Blog</h1>
            {articles.length && (
                articles.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                ))
            )}
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}

export default Blog