import * as React from 'react'
import { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image';

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
                            <StaticImage
                                src="../../../images/up-chevron.png"
                                alt="go to top"
                                layout="fixed"
                                width={25}
                                height={15}
                            />
                        </button>
                    </div>
                )
            }
        </>
    )
}
