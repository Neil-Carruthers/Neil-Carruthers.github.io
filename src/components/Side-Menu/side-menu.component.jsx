import * as React from 'react';

import * as styles from './side-menu.module.scss'


export default function SideMenu() {
    return (
        <div className={styles.container}>
            <ul>
                {/* <li>
                    <a href="#blog-posts" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('blog-posts').scrollIntoView({behavior: 'smooth'});
                    }}>
                        Blog Posts
                    </a>
                </li> */}
                {/* <li>
                    <a href="#about-me" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about-me').scrollIntoView({behavior: 'smooth'});
                    }}>
                        About Me
                    </a>
                </li> */}
                <li>
                    <a href="#experience" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('experience').scrollIntoView({behavior: 'smooth'});
                    }}>
                        Experience
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                    }}>
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}