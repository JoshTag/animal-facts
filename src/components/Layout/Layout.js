import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import "./Layout.scss"

const Main = styled.main`
  background-color: ${props => props.theme};
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  transition: .6s;
  transition-timing-function: ease-in-out;
`

const Layout = ({ children, colour }) => {
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

  const { description, keywords, title } = data.site.siteMetadata

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <html lang="en" />
        <title>{title}</title>
      </Helmet>
      <Main theme={colour}>{children}</Main>
    </>
  )
}

export default Layout
