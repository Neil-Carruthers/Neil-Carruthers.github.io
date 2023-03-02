import * as React from "react"
import { graphql, Link } from "gatsby"

import Seo from "../components/seo"

import * as styles from '../styles/home.module.scss';

export default function Home({ data }) {
  return (
    <main>
      <section>
        <p className={`${styles.greeting} fixedSys`}>Hi, my name is</p>
        <div className={styles.header}>
          <h1>Neil Carruthers.</h1>
          <h1>I&apos;m passionate about React and Web3.</h1>
        </div>
        <p className={styles.summary}>
          I&apos;m a software developer specializing in React and Node.js.
          {' '}
          Currently, I&apos;m focused on building multi-lingual, digital learning products at
          {' '}
          <span className={styles.flavor}>
            <a href="https://www.binogi.com/">
              Binogi
            </a>
          </span>.
        </p>
        </section>
      <section className={styles.blogPosts}>
        <h3 className='sectionHeader'>Recent Blog Posts</h3>
        <ul>
          {
            data.allMarkdownRemark.edges.slice(0,3).map(({node}) => {
              const { id, excerpt, fields: { slug },  frontmatter: { title, date } } = node

              return (
                <li key={id}>
                  <Link to={`/blog${slug}`}>
                    {title}
                  </Link>
                  {' '}
                  <span className={styles.formattedDate}>({date})</span>
                  <p>{excerpt}</p>
                </li>
              )
            })
          }
        </ul>
      </section>
    </main>
  )
}

export const Head = () => <Seo />

export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          frontmatter {
            title
            date
            featured
          }
          id
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`