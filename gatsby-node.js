/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: 'https://unixmub.netlify.com/*',
    toPath: 'https://unixmib.org/:splat',
    isPermanent: true,
    force: true,
  })
}
