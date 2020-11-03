import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
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
            <img
              className="proiecteImg"
              src={project.node.linkuri[0]}
              alt={project.node.titlu}
              id="homeImg"
              style={{ transform: `translateY(100%)` }}
            />

            <div className="overlay">
              <div className="overlayText">
                <Link
                  to={`/proiect${project.node.id}`}
                  className="overlayText-link"
                >
                  {project.node.titlu}
                </Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProjectTemplate
