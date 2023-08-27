import * as React from 'react'
import * as styles from './layout.module.css';

export default function Layout({ children }) {
    return (
        <main className={styles.container}>
            <>
                {children}
            </>
        </main>
    )
}