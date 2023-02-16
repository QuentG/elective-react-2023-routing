import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const BlogArticle = () => {
    const { id } = useParams()
    const { state } = useLocation()

    const [comments, setComments] = useState([])
    const [article, setArticle] = useState(null)

    const getArticle = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json()
        setArticle(data)
    }

    const getArticleComments = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        const data = await response.json()
        setComments(data)
    }

    useEffect(() => {
        if (state?.article) {
            setArticle(state.article)
        } else {
            getArticle()
        }

        getArticleComments()
    }, [state, id])

    return (
        <div>
            {article && (
                <div>
                    <h1>Blog Article n° {id}</h1>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                </div>
            )}
            <h3>Comments</h3>
            {comments.length && (
                comments.map((comment, index) => (
                    <div key={index}>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                    </div>
            )))}
        </div>
    )
}

export default BlogArticle