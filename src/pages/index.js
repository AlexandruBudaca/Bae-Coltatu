import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "react-bootstrap/Carousel"
import "../components/Styles/index.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Carousel pause={false} interval={2000}>
      {data.homeCarousel.edges.map(images => (
        <Carousel.Item key={images.node.id}>
          <Img
            className="d-block w-100"
            fluid={images.node.childImageSharp.fluid}
            alt="images.node.base"
          />
        </Carousel.Item>
      ))}
    </Carousel>
    <div className="carousel-container"> </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    homeCarousel: allFile(
      sort: { fields: base, order: ASC }
      filter: {
        extension: { regex: "/(jpg)|(png)/" }
        relativeDirectory: { eq: "HomeCarousel" }
      }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
