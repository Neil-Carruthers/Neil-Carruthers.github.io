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

    const handleClick = () => {
        window.scroll(0,0);
    }

    return (
        <>
            {
                showButton && (
                    <div className={styles.container}>
                        <button onClick={handleClick}>Click Me</button>
                    </div>
                )
            }
        </>
    )
}
