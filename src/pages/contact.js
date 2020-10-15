import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"

import "../components/Styles/contact.css"
const Contact = () => {
  return (
    <Layout>
      <Container className="contact-container">
        <Row>
          <Col>Contact</Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Contact
