import React from "react"
import { graphql } from "gatsby"
import SingleTemplate from "./SingleTemplate"

import "../Styles/proiecte.css"

const SingleConcursTemplate = data => {
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
