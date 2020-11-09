import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import SingleTemplate from "./SingleTemplate"

import "../Styles/proiecte.css"

const SingleConceptTemplate = ({ data }) => {
  return <SingleTemplate myData={data.customNodeConcepte} back="/concepte/" />
}

export default SingleConceptTemplate

export const pageQuery = graphql`
  query($id: String!) {
    customNodeConcepte(id: { eq: $id }) {
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
SingleConceptTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes),
  customNodeConcepte: PropTypes.objectOf(PropTypes),
}
