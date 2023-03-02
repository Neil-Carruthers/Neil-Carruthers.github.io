import React from 'react'
import Seo from '../components/seo'

import * as styles from '../styles/blog-post.module.scss'

const BlogPost =  ({ pageContext: context }) => {
    const { title, date, html } = context
    
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.formattedDate}>{date}</div>
            <div dangerouslySetInnerHTML={{__html: html}} />
        </main>
    )
}

export default BlogPost;

export const Head = () => <Seo />
