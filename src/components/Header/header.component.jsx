import * as React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from './header.module.scss'

export default function Header() {
    return (
        <header>
            <nav className={styles.navigation}>
                <span>
                    <Link to="/" className={styles.centerContent}>
                        <StaticImage
                            src="../../images/logo.svg"
                            alt="logo"
                            width={42}
                            height={42}
                        />
                        <div className={styles.innerLay}/>
                    </Link>
                </span>
                <span className='fixedSys'>
                    {/* <Link to="/services">Services</Link> */}
                    {/* <Link to="/blog">Blog</Link> */}
                    {/* <Link to="/about">About</Link> */}
                    {/* <Link to="/experience">Experience</Link>
                    <Link to="/contact">Contact</Link> */}
                </span>
            </nav>
        </header>
    )
}