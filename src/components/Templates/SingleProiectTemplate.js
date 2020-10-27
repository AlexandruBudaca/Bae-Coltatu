import React from "react"
import Layout from "../layout"
import SEO from "../seo"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import ImageGallery from "react-image-gallery"
import { Container, Row } from "react-bootstrap"
import "../Styles/proiecte.css"

const SingleProiectTemplate = ({ data }) => {
  let images
  if (data.mongodbColtatuProiecte.linkuri === null) {
    return null
  } else {
    images = data.mongodbColtatuProiecte.linkuri.map(link => ({
      original: link,
      thumbnail: link,
    }))
  }

  return (
    <Layout>
      <SEO title={data.mongodbColtatuProiecte.titlu} />
      <Container className="singleProiect-container">
        <Link to="/lucrari/" className="back-btn-singleProject">
          Back
        </Link>
        <Row className="singleProiect-row ">
          <h5>{data.mongodbColtatuProiecte.titlu}</h5>
          <ImageGallery items={images} />
          <div className="proiect-description">
            <div>{data.mongodbColtatuProiecte.description}</div>
            <div>{data.mongodbColtatuProiecte.description}</div>
            <div>{data.mongodbColtatuProiecte.description}</div>
            <div>{data.mongodbColtatuProiecte.description}</div>
          </div>
        </Row>
      </Container>
    </Layout>
  )
}

export default SingleProiectTemplate

export const pageQuery = graphql`
  query($id: String!) {
    mongodbColtatuProiecte(id: { eq: $id }) {
      id
      titlu
      linkuri
      description
    }
  }
`
