import * as React from 'react'
import Seo from '../components/seo'
// import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../styles/services.module.scss';

export default function Services() {
  return (
    <main className={styles.container}>
      <h3 className='sectionHeader'>Services</h3>

      <div className={styles.row}>
        <div className={styles.colLeft}>
          <p>
            Hey there. Thanks for taking the time to check out my services. Let me tell you a little bit about what you can pay me to do.
          </p>

          <p>
            <ul>
                <li>Test Driven Development</li>
                <li>Design and Implement New Features</li>
                <li>Performance Optimizations</li>
            </ul>
          </p>
        </div>
        <div className={styles.colRight}>
          {/* <StaticImage
              src="../images/me.png"
              alt="personal"
              layout="fixed"
              className={styles.profileImage}
              width={300}
              height={300}
          /> */}
        </div>
      </div>
    </main>
  )
}

export const Head = () => <Seo />