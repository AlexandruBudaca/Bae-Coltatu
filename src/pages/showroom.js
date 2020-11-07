import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Modal from "react-bootstrap/Modal"
import { TweenMax } from "gsap"
import { Container, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Styles/showroom.css"

const Showroom = ({ data }) => {
  const [image, setImage] = useState({})
  const [showImageModal, setShowImageModal] = useState(false)
  const handleClose = () => setShowImageModal(false)

  useEffect(() => {
    TweenMax.fromTo(".showroom-col", 1.5, { y: `100%` }, { y: `0%` })
  })

  return (
    <Layout>
      <SEO title="Showroom" />
      <Container className="showroom-container">
        {data.Showroom.edges.map(images => (
          <Col
            lg={4}
            key={images.node.id}
            className="showroom-col"
            onClick={() => {
              setShowImageModal(true)
              setImage(images)
            }}
          >
            <Img
              loading="eager"
              fluid={images.node.childImageSharp.fluid}
              alt={images.node.base}
            />
          </Col>
        ))}
        <Modal show={showImageModal} onHide={handleClose} size="lg" centered>
          <Modal.Body>
            {" "}
            <button
              onClick={() => setShowImageModal(false)}
              className="showroom-btn"
              type="button"
            >
              X
            </button>
          </Modal.Body>
          {showImageModal && (
            <Img
              loading="eager"
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base}
              className="image-modal"
            />
          )}
        </Modal>
      </Container>
    </Layout>
  )
}

export default Showroom

export const pageQuery = graphql`
  query {
    Showroom: allFile(
      filter: { relativeDirectory: { eq: "Showroom" } }
      sort: { fields: base, order: ASC }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

Showroom.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  Showroom: PropTypes.objectOf(PropTypes.any),
  edges: PropTypes.arrayOf(PropTypes.any),
  map: PropTypes.arrayOf(PropTypes.string),
}
