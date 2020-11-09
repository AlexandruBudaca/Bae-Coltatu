import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from "react-bootstrap/Carousel"
import { TweenMax } from "gsap"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/Styles/index.css"

import logo from "../images/logoColtatu.png"

const IndexPage = ({ data }) => {
  const intro = useRef(null)
  const hide = useRef(null)
  const logoImg = useRef(null)
  const slider = useRef(null)
  const [showHome, setShowHome] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowHome(true)
    }, 2300)

    TweenMax.fromTo(logoImg.current, 1.5, { y: `100%` }, { y: `0%` })
    TweenMax.fromTo(slider.current, 1.5, { y: `100%` }, { y: `-100%` }).delay(
      2.0
    )
    TweenMax.fromTo(intro.current, 1, { y: `0%` }, { y: `-100%` }).delay(2.5)
  }, [])

  return (
    <>
      <div className="intro" ref={intro}>
        <div className="hide" ref={hide}>
          <img
            src={logo}
            alt="intro_logo"
            ref={logoImg}
            style={{
              width: "250px",
              height: "250px",
            }}
          />
        </div>
      </div>
      <div
        className="slider"
        ref={slider}
        style={{ transform: `translateY(100%)` }}
      />
      {showHome && (
        <Layout>
          <SEO title="Home" />

          <Carousel pause={false} interval={3000} indicators={false}>
            {data.homeCarousel.edges.map(images => (
              <Carousel.Item key={images.node.id}>
                <Img
                  className="d-block w-100"
                  fluid={images.node.childImageSharp.fluid}
                  alt={images.node.base}
                  loading="eager"
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="carousel-container"> </div>
        </Layout>
      )}
    </>
  )
}

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

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  homeCarousel: PropTypes.objectOf(PropTypes.any),
  edges: PropTypes.arrayOf(PropTypes.any),
  map: PropTypes.arrayOf(PropTypes.any),
}
