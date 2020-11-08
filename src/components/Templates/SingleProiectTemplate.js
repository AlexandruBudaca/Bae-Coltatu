import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import SingleTemplate from "./SingleTemplate"

import "../Styles/proiecte.css"

const SingleProiectTemplate = ({ data }) => {
  return <SingleTemplate myData={data.customNodeProjects} back="/proiecte/" />
}

export default SingleProiectTemplate

export const pageQuery = graphql`
  query($id: String!) {
    customNodeProjects(id: { eq: $id }) {
      id
      title
      localImages {
        childImageSharp {
          fluid(quality: 100, maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

SingleProiectTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  mongodbColtatuProiecte: PropTypes.objectOf(PropTypes.any),
}
