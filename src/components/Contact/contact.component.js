import * as React from 'react'
import * as styles from './contact.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

export default function Contact() {
    return (
        <main className={styles.container}>
            <h3 className="sectionHeader" id='contact'>Contact</h3>
            <p>I am not currently looking for any new opportunities, however feel free to reach out to me if you have any questions or comments. I am always happy to discuss anything to do with software development especially when related to React or Solidity.</p>
            <div>
                <button>
                    <a href="mailto:carruthers.n.t@gmail.com">
                        <StaticImage
                            src="../../images/email.svg"
                            alt="email"
                            layout="fixed"
                            width={50}
                            height={36}
                        />
                    </a>
                </button>
                <button>
                    <a
                        href="https://www.linkedin.com/in/neil-carruthers/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <StaticImage
                            src="../../images/linkedin.svg"
                            alt="linkedin"
                            layout="fixed"
                            width={36}
                            height={36}
                        />
                    </a>
                </button>
            </div>
        </main>
    )
}
