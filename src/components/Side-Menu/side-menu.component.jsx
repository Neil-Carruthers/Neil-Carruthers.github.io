import * as React from 'react';
import { useEffect, useState } from 'react'
import * as styles from './side-menu.module.scss'


export default function SideMenu() {
    const [ blogPostTop, setBlogPostTop ] = useState(0);

    useEffect(() => {
        const blogPostsTop = document.getElementById("blog-posts").getBoundingClientRect().y
        setBlogPostTop(blogPostsTop);
    }, [])

    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <a href="#blog-posts">Blog Posts</a>
                </li>
                <li>About Me</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}