import React from "react"
import { graphql } from "gatsby"
import SingleTemplate from "./SingleTemplate"
import "../Styles/proiecte.css"

const SingleProiectTemplate = ({ data }) => {
  return (
    <SingleTemplate myData={data.mongodbColtatuProiecte} back={"/proiecte/"} />
  )
}

export default SingleProiectTemplate

export const pageQuery = graphql`
  query($id: String!) {
    mongodbColtatuProiecte(id: { eq: $id }) {
      id
      titlu
      linkuri
      description
    }
  }
`
