import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import ProjectsTemplate from "./Templates/ProjectsTemplate"

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
          linkuri: PropTypes.arrayOf(PropTypes.any).isRequired,
          id: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }),
}
