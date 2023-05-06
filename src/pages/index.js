import * as React from "react"
import { graphql, Link } from "gatsby"

import Seo from "../components/seo"

import About from "../components/About/about.component";
import Experience from "../components/Experience/experience.component";
import Contact from "../components/Contact/contact.component";
import TopButton from "../components/Buttons/Top/top-button.component";

import * as styles from '../styles/home.module.scss';

export default function Home({ data }) {
  return (
    <main>
      <section>
        <p className={`${styles.greeting} fixedSys`}>Hi, my name is</p>
        <div className={styles.header}>
          <h1>Neil Carruthers.</h1>
          <h1>I&apos;m passionate about React.</h1>
        </div>
        <p className={styles.summary}>
          Full stack senior developer in React using optimal and current best practices
        </p>
        </section>
      <section className={styles.blogPosts}>
        <h3 className='sectionHeader'>Blog Posts</h3>
        <ul>
          {
            data.allMarkdownRemark.edges.slice(0,3).map(({node}) => {
              const {
                id,
                // html,
                excerpt,
                fields: { slug }, 
                frontmatter: { title, date }
              } = node

              return (
                <li key={id}>
                  <Link to={`/blog${slug}`}>
                    {title}
                  </Link>
                  {' '}
                  <span className={styles.formattedDate}>({date})</span>
                  <p>{excerpt}</p>
                  {/* <div dangerouslySetInnerHTML={{__html: html}}/> */}
                </li>
              )
            })
          }
        </ul>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Contact />
      </section>
      <TopButton />
    </main>
  )
}

export const Head = () => <Seo />

export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          html
          frontmatter {
            title
            date
            featured
          }
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
        }
      }
    }
  }
`