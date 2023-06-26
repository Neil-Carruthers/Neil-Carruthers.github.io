import * as React from 'react';

import * as styles from './side-menu.module.scss'


export default function SideMenu() {
    return (
        <div className={styles.container}>
            <ul>
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