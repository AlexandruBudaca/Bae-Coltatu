import React from "react"
import ProjectsTemplate from "./Templates/ProjectsTemplate"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const Proiecte = () => {
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
      render={data => (
        <ProjectsTemplate myData={data.allMongodbColtatuProiecte.edges} />
      )}
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
  }).isRequired,
}
