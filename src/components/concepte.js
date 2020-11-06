import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import ProjectsTemplate from "./Templates/ProjectsTemplate"

const Concepte = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMongodbColtatuConcepte {
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
        <ProjectsTemplate myData={data.allMongodbColtatuConcepte.edges} />
      )}
    />
  )
}

export default Concepte

Concepte.propTypes = {
  data: PropTypes.shape({
    allMongodbColtatuConcepte: PropTypes.shape({
      edges: PropTypes.shape({
        node: PropTypes.shape({
          title: PropTypes.string.isRequired,
          linkuri: PropTypes.arrayOf(PropTypes.any),
          id: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }),
}
