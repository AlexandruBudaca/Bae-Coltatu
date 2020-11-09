import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import SingleTemplate from "./SingleTemplate"

import "../Styles/proiecte.css"

const SingleConcursTemplate = ({ data }) => {
  return (
    <SingleTemplate myData={data.customNodeConcursuri} back="/concursuri/" />
  )
}

export default SingleConcursTemplate

export const pageQuery = graphql`
  query($id: String!) {
    customNodeConcursuri(id: { eq: $id }) {
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
SingleConcursTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes),
  customNodeConcursuri: PropTypes.objectOf(PropTypes),
}
