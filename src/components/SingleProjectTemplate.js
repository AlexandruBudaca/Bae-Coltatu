import React from "react"

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
