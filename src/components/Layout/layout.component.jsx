import * as React from 'react'
import Header from "../Header/header.component";
import * as styles from './layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            <main
                className={styles.childrenContainer}
            >
                {children}
            </main>
        </div>
    )
}