import * as React from 'react'
import { Link, graphql } from 'gatsby';
import Seo from '../components/seo';
import * as styles from '../styles/blog-index.module.scss';

export default function BlogIndex({ data }) {
  return (
    <main>
      <section className={styles.blogPosts}>
        <h3 className='sectionHeader'>Blog</h3>
        <ul>
            {
              data.allMarkdownRemark.edges.map(({ node }) => {
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