import React from "react"
import { graphql } from "gatsby"

const SingleProjectTemplate = ({ data }) => {
  const myData = data.mongodbColtatuProiecte.titlu
  return (
    <div>
      {myData}
      <p>{data.mongodbColtatuProiecte.description}</p>
    </div>
  )
}

export default SingleProjectTemplate

export const pageQuery = graphql`
  query($id: String!) {
    mongodbColtatuProiecte(id: { eq: $id }) {
      id
      titlu
      description
    }
  }
`
