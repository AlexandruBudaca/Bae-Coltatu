import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import SingleTemplate from "./SingleTemplate"

import "../Styles/proiecte.css"

const SingleConcursTemplate = ({ data }) => {
  return (
    <SingleTemplate
      myData={data.mongodbColtatuConcursuri}
      back="/concursuri/"
    />
  )
}

export default SingleConcursTemplate

export const pageQuery = graphql`
  query($id: String!) {
    mongodbColtatuConcursuri(id: { eq: $id }) {
      id
      titlu
      linkuri
      description
    }
  }
`
SingleConcursTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes),
  mongodbColtatuConcursuri: PropTypes.objectOf(PropTypes),
}
