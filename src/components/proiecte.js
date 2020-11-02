import React, { useState, useEffect } from "react"
import ProjectsTemplate from "./Templates/ProjectsTemplate"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { Row } from "react-bootstrap"

const Proiecte = () => {
  const [showImages, setShowImages] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowImages(true)
    }, 500)
  })
  return (
    <StaticQuery
      query={graphql`
        query {
          allMongodbColtatuProiecte {
            edges {
              node {
                titlu
                linkuri
                id
              }
            }
          }
        }
      `}
      render={data =>
        showImages ? (
          <ProjectsTemplate myData={data.allMongodbColtatuProiecte.edges} />
        ) : (
          <Row>
            <h4>Loading</h4>
          </Row>
        )
      }
    />
  )
}

export default Proiecte

Proiecte.propTypes = {
  data: PropTypes.shape({
    allMongodbColtatuConcepte: PropTypes.shape({
      edges: PropTypes.shape({
        node: PropTypes.shape({
          title: PropTypes.string.isRequired,
          linkuri: PropTypes.array.isRequired,
          id: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }),
}
