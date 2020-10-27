import React from "react"
import Layout from "../layout"
import SEO from "../seo"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import ImageGallery from "react-image-gallery"
import { Container } from "react-bootstrap"
import "../Styles/proiecte.css"

const SingleProiectTemplate = ({ data }) => {
  return (
    <Layout>
      {data && (
        <>
          <SEO title={data.mongodbColtatuProiecte.titlu} />
          <Container className="singleProiect-container">
            <div className="title-carousel">
              <Link to="/lucrari/" className="back-btn-singleProject">
                Back
              </Link>
              <h5>{data.mongodbColtatuProiecte.titlu}</h5>
              <ImageGallery
                items={data.mongodbColtatuProiecte.linkuri.map(link => ({
                  original: link,
                  thumbnail: link,
                }))}
              />
            </div>
            <div className="proiect-description"></div>
          </Container>{" "}
        </>
      )}
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
