import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import ProjectsTemplate from "./Templates/ProjectsTemplate"

const Concepte = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allCustomNodeConcepte {
            edges {
              node {
                title
                id
                localImages {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 3000) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <ProjectsTemplate myData={data.allCustomNodeConcepte.edges} />
      )}
    />
  )
}

export default Concepte

Concepte.propTypes = {
  data: PropTypes.shape({
    allCustomNodeConcepte: PropTypes.shape({
      edges: PropTypes.shape({
        node: PropTypes.shape({
          title: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }),
}
