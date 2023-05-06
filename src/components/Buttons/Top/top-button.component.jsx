import * as React from 'react'
import { useEffect, useState } from 'react'

import * as styles from './top-button.module.scss';

export default function TopButton() {
    const [ showButton, setShowButton ] = useState(false);

    useEffect(() => {
        setShowButton(window.scrollY > 600);
        window.addEventListener("scroll", () => {
            setShowButton(window.scrollY > 600)
        });
    }, [])

    return (
        <>
            {
                showButton && (
                    <div className={styles.container}>
                        <button
                            onClick={() => {window.scroll({
                                top: 0,
                                left: 0,
                                behavior: 'smooth'
                            })}}
                        >
                            Click Me
                        </button>
                    </div>
                )
            }
        </>
    )
}
