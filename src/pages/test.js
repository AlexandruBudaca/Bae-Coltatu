import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const TestLocalImages = ({ data }) => {
  return (
    <Layout>
      {console.log(data)}
      <Img
        fluid={
          data.allCustomNode.edges[0].node.localImages[0].childImageSharp.fluid
        }
        alt="foo"
      />
      {/* <img
        src={
          data.allCustomNode.edges[0].node.localImages[0].childImageSharp.fluid
            .src
        }
      /> */}
    </Layout>
  )
}
export default TestLocalImages

export const pageQuery = graphql`
  query {
    allCustomNode {
      edges {
        node {
          localImages {
            childImageSharp {
              id
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
