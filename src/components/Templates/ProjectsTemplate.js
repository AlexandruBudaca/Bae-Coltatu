import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import "../Styles/proiecte.css"

const ProjectTemplate = ({ myData }) => {
  return (
    <Container className="proiecte-container">
      <Row className="proiecte-row">
        {myData.map(project => (
          <Col lg={4} md={6} className="col-projects">
            <Link to={`/proiect${project.node.id}`}>
              <img
                className="proiecteImg"
                src={project.node.linkuri[0]}
                alt={project.node.titlu}
              />
            </Link>
            <p>{project.node.titlu}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProjectTemplate
