import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import pic from "../images/1.jpg"

import "../components/Styles/proiecte.css"
const Contact = () => {
  return (
    <Container className="proiecte-container">
      <Row className="proiecte-row">
        <Col lg={4} md={6}>
          <img className="proiecteImg" src={pic} alt="First slide" />
        </Col>
        <Col lg={4} md={6}>
          <img className="proiecteImg" src={pic} alt="First slide" />
        </Col>
        <Col lg={4} md={6}>
          <img className="proiecteImg" src={pic} alt="First slide" />
        </Col>
        <Col lg={4} md={6}>
          <img className="proiecteImg" src={pic} alt="First slide" />
        </Col>
        <Col lg={4} md={6}>
          <img className="proiecteImg" src={pic} alt="First slide" />
        </Col>
        <Col lg={4} md={6}>
          <img className="proiecteImg" src={pic} alt="First slide" />
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
