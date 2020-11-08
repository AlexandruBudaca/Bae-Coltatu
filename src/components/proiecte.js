import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import ProjectsTemplate from "./Templates/ProjectsTemplate"

const Proiecte = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allCustomNodeProjects {
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
        <ProjectsTemplate myData={data.allCustomNodeProjects.edges} />
      )}
    />
  )
}

export default Proiecte

Proiecte.propTypes = {
  data: PropTypes.shape({
    allCustomNodeProjects: PropTypes.shape({
      edges: PropTypes.shape({
        node: PropTypes.shape({
          title: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }),
}
