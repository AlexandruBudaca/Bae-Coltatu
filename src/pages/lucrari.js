import React from "react"

import Layout from "../components/layout"

import { Container, Row, Col } from "react-bootstrap"
import "../components/Styles/lucrari.css"

const Lucrari = () => {
  return (
    <Layout>
      <Container className="lucrari-container">
        <Row>
          <Col>
            {" "}
            <button href="#">Proiecte</button>
          </Col>
          <Col>
            {" "}
            <button href="#">Concepte</button>
          </Col>
          <Col>
            {" "}
            <button href="#">Concursuri</button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default Lucrari
