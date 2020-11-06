import React from "react"
import PropTypes from "prop-types"

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

SingleProjectTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  mongodbColtatuProiecte: PropTypes.objectOf(PropTypes.any),
  titlu: PropTypes.string,
  description: PropTypes.string,
}
