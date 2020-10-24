import React from "react"
import ProjectsTemplate from "./ProjectsTemplate"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

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
          linkuri: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
