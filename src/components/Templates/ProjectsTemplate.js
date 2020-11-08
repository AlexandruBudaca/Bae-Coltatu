import React, { useEffect } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"
import "../Styles/proiecte.css"

import { TweenMax } from "gsap"

const ProjectTemplate = ({ myData }) => {
  useEffect(() => {
    TweenMax.fromTo("#homeImg", 1.5, { y: `100%` }, { y: `0%` })
  })

  return (
    <Container className="proiecte-container">
      <Row className="proiecte-row">
        {myData.map(project => (
          <Col lg={4} md={6} className="col-projects" key={project.node.id}>
            <Link
              to={`/proiect${project.node.id}`}
              id="homeImg"
              style={{ transform: `translateY(100%)` }}
              className="proiecteImg"
            >
              <Img
                fluid={project.node.localImages[0].childImageSharp.fluid}
                alt={project.node.title}
                objectFit="cover"
                style={{ height: `200px` }}
              />
            </Link>

            <div className="overlay">
              <Link
                to={`/proiect${project.node.id}`}
                className="overlayText-link"
              >
                <div className="overlayText">{project.node.title}</div>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProjectTemplate

ProjectTemplate.propTypes = {
  myData: PropTypes.arrayOf(PropTypes.any),
  map: PropTypes.arrayOf(PropTypes.any),
}
