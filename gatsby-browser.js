/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

const React = require("react")
const Layout = require('./src/components/Layout/layout.component').default

require('./src/styles/globals.css')

exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}