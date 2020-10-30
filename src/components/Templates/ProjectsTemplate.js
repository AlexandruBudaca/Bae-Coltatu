import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import "../Styles/proiecte.css"

const ProjectTemplate = ({ myData }) => {
  return (
    <Container className="proiecte-container">
      {myData && (
        <Row className="proiecte-row">
          {myData.map(project => (
            <Col lg={4} md={6} className="col-projects" key={project.node.id}>
              <img
                className="proiecteImg"
                src={project.node.linkuri[0]}
                alt={project.node.titlu}
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
      )}
    </Container>
  )
}

export default ProjectTemplate
