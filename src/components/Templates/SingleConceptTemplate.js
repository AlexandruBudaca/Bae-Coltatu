import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import SingleTemplate from "./SingleTemplate"

import "../Styles/proiecte.css"

const SingleConceptTemplate = ({ data }) => {
  return (
    <SingleTemplate myData={data.mongodbColtatuConcepte} back="/concepte/" />
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
SingleConceptTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes),
  mongodbColtatuConcepte: PropTypes.objectOf(PropTypes),
}
