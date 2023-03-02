/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
  `)

  return result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: `/blog${node.fields.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        html: node.html
      }
    })
  })
}


const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}