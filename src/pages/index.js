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

    <Carousel pause={false} interval={2500} indicators={false}>
      {data.homeCarousel.edges.map(images => (
        <Carousel.Item key={images.node.id}>
          <Img
            loading="eager"
            className="d-block w-100"
            fluid={images.node.childImageSharp.fluid}
            alt={images.node.base}
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
      filter: {
        extension: { regex: "/(jpg)|(png)/" }
        relativeDirectory: { eq: "HomeCarousel" }
      }
      sort: { fields: base, order: ASC }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(quality: 100, maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
