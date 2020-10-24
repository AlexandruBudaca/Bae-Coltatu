import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "../components/Styles/proiecte.css"

const ProjectTemplate = ({ myData }) => {
  return (
    <Container className="proiecte-container">
      <Row className="proiecte-row">
        {myData.map(project => (
          <Col lg={4} md={6} className="col-projects">
            <img
              className="proiecteImg"
              src={project.node.linkuri[0]}
              alt={project.node.titlu}
            />
            <p>{project.node.titlu}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProjectTemplate
