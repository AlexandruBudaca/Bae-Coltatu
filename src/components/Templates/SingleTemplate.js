import React from "react"
import Layout from "../layout"
import SEO from "../seo"
import { Link } from "gatsby"

import ImageGallery from "react-image-gallery"
import { Container } from "react-bootstrap"
import "../Styles/proiecte.css"

const SingleTemplate = ({ myData }) => {
  return (
    <Layout>
      <SEO title={myData.titlu} />
      {myData.linkuri && (
        <>
          <Container className="singleProiect-container">
            <div className="title-carousel">
              <Link to="/lucrari/" className="back-btn-singleProject">
                Back
              </Link>
              <h5>{myData.titlu}</h5>
              <ImageGallery
                items={myData.linkuri.map(link => ({
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

export default SingleTemplate
