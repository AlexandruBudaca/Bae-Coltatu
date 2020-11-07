import React from "react"

import { Link } from "gatsby"
import propTypes from "prop-types"
import ImageGallery from "react-image-gallery"
import { Container } from "react-bootstrap"
import Layout from "../layout"
import SEO from "../seo"
import "../Styles/proiecte.css"

const SingleTemplate = ({ myData, back }) => {
  return (
    <Layout>
      <SEO title={myData.titlu} />
      {myData.linkuri && (
        <>
          <Container className="singleProiect-container">
            <Link to={back} className="back-btn-singleProject">
              Back
            </Link>
            <h5>{myData.titlu}</h5>
            <ImageGallery
              items={myData.linkuri.map(link => ({
                original: link,
                thumbnail: link,
              }))}
            />
            <div className="proiect-description" />
          </Container>
        </>
      )}
    </Layout>
  )
}

export default SingleTemplate

SingleTemplate.propTypes = {
  myData: propTypes.objectOf(propTypes.any),
  back: propTypes.string,
  titlu: propTypes.string,
  linkuri: propTypes.arrayOf(propTypes.any),
}
