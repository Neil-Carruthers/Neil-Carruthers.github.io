import * as React from 'react'
import * as styles from './layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <main
                className={styles.childrenContainer}
            >
                {children}
            </main>
        </div>
    )
}