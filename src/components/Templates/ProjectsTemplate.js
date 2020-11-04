import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import "../Styles/proiecte.css"

import { TweenMax } from "gsap"

const ProjectTemplate = ({ myData }) => {
  useEffect(() => {
    TweenMax.fromTo("#homeImg", 1.5, { y: `100%` }, { y: `0%` })
    TweenMax.fromTo("#homeImg", 2, { autoAlpha: 0 }, { autoAlpha: 1 })
  })

  return (
    <Container className="proiecte-container">
      <Row className="proiecte-row">
        {myData.map(project => (
          <Col lg={4} md={6} className="col-projects" key={project.node.id}>
            <Link to={`/proiect${project.node.id}`}>
              <img
                className="proiecteImg"
                src={project.node.linkuri[0]}
                alt={project.node.titlu}
                id="homeImg"
                style={{ transform: `translateY(100%)` }}
              />
            </Link>

            <div className="overlay">
              <Link
                to={`/proiect${project.node.id}`}
                className="overlayText-link"
              >
                <div className="overlayText">{project.node.titlu}</div>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProjectTemplate
