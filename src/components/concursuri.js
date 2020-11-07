import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import ProjectsTemplate from "./Templates/ProjectsTemplate"

const Concursuri = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMongodbColtatuConcursuri {
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
        <ProjectsTemplate myData={data.allMongodbColtatuConcursuri.edges} />
      )}
    />
  )
}

export default Concursuri

Concursuri.propTypes = {
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
