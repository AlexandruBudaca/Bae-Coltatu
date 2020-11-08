import React from "react"

import { Link } from "gatsby"
import propTypes from "prop-types"
import Img from "gatsby-image"
// import ImageGallery from "react-image-gallery"
import { Container, Col, Row } from "react-bootstrap"
import Layout from "../layout"
import SEO from "../seo"
import "../Styles/proiecte.css"

const SingleTemplate = ({ myData, back }) => {
  return (
    <Layout>
      <SEO title={myData.title} />
      <Container className="singleProiect-container">
        <Link to={back} className="back-btn-singleProject">
          Back
        </Link>
        <h5>{myData.title}</h5>

        {myData.localImages.map(link => {
          return (
            <div className="col-singleProject" key={myData.title}>
              <Img fluid={link.childImageSharp.fluid} />
            </div>
          )
        })}

        {/* <ImageGallery
          items={myData.localImages.map(link => ({
            original: link.childImageSharp.fluid.src,
            thumbnail: link.childImageSharp.fluid.src,
          }))}
        /> */}
        <div className="proiect-description" />
      </Container>
    </Layout>
  )
}

export default SingleTemplate

SingleTemplate.propTypes = {
  myData: propTypes.objectOf(propTypes.any),
  back: propTypes.string,
  title: propTypes.string,
  localImages: propTypes.arrayOf(propTypes.any),
}
