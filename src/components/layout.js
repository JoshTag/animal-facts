import React from "react"
import { graphql, useStaticQuery } from "gatsby" 
import { Helmet } from "react-helmet"
import "./Layout.css"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `)

  const siteMetadata = data.site.siteMetadata

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <html lang="en" />
        <title>{siteMetadata.title}</title>
      </Helmet>
      <main>{children}</main>
    </>
  )
}

export default Layout
