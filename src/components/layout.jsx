import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'

function Layout({ children }) {
  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  )
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Header siteData={site.siteMetadata} />
      <div className="container-fluid flex-grow-1" style={{ padding: 0 }}>
        {children}
      </div>
      <footer>
        Copyright unix<span>MiB</span> {new Date().getFullYear()} - Creative
        Commons <span>Attribution-ShareAlike 4.0</span> International
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout