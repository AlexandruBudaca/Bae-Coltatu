import React from "react"
import Layout from "../layout"
import SEO from "../seo"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import ImageGallery from "react-image-gallery"
import { Container } from "react-bootstrap"
import "../Styles/proiecte.css"

const SingleConceptTemplate = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data && (
        <>
          <SEO title={data.mongodbColtatuConcepte.titlu} />
          <Container className="singleProiect-container">
            <Link to="/lucrari/" className="back-btn-singleProject">
              Back
            </Link>
            <div className="title-carousel">
              <h5>{data.mongodbColtatuConcepte.titlu}</h5>
              <ImageGallery
                items={data.mongodbColtatuConcepte.linkuri.map(link => ({
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

export default SingleConceptTemplate

export const pageQuery = graphql`
  query($id: String!) {
    mongodbColtatuConcepte(id: { eq: $id }) {
      id
      titlu
      linkuri
      description
    }
  }
`
