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
            I first began my journey back in 2000. I had a lot of fun messing around with HTML and CSS to create web pages about my favorite shows and video games. Quickly I started to become more interested in how to write computer programs. I started out writing some very simple programs in C that could do my high school math homework for me.
          </p>

          <p>
            Upon graduating from high school I enrolled in the <span><a target="_blank" rel="noreferrer" href="https://www.dal.ca/faculty/computerscience/undergraduate-programs/study-computer-science.html">Bachelor of Computer Science program at Dalhousie University</a></span>. I greatly enjoyed my time learning about IT fundamentals, software development, data structures, algorithms and database applications. I ultimately focused on web and mobile development.
          </p>

          <p>
            Fast forward to today. I am currently a software developer at an <span><a target="_blank" rel="noreferrer" href="https://www.binogi.com/">international educational technology start-up</a></span> with experience in modern JavaScript, TypeScript, React, Next.js, GraphQL, RESTful APIs, web3 and clean architectural style, bringing my experiences from engineering design into software development.
          </p>

          <p>
            I believe that React has really proven to be a remarkable tool for creating front end client applications as a result of its amazing efficiency and its developer experience, among many other things. When I first learned about web3 I was impressed by the new ways of thinking about how to execute back-end logic and store data and I'm very excited to see how these new technologies will grow and fill more roles in the years to come.
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