import React from "react"
import { graphql } from "gatsby"
import SingleTemplate from "./SingleTemplate"
import "../Styles/proiecte.css"
const SingleConceptTemplate = ({ data }) => {
  return (
    <SingleTemplate myData={data.mongodbColtatuConcepte} back={"/concepte/"} />
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
