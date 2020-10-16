import React, { useState } from "react"

import Layout from "../components/layout"
import Proiecte from "./proiecte"
import { Container, Row, Col } from "react-bootstrap"
import "../components/Styles/lucrari.css"

const Lucrari = () => {
  const [activeBtn, setActiveBtn] = useState("proiecte")

  const changeActiveBtn = e => {
    setActiveBtn(e.target.value)
  }

  return (
    <Layout>
      {console.log(activeBtn)}
      <Container className="lucrari-container">
        <Row>
          <Col>
            {" "}
            <button
              value="proiecte"
              onClick={changeActiveBtn}
              className={activeBtn === "proiecte" ? "active" : "noActive"}
            >
              Proiecte
            </button>
          </Col>
          <Col>
            {" "}
            <button
              value="concepte"
              onClick={changeActiveBtn}
              className={activeBtn === "concepte" ? "active" : "noActive"}
            >
              Concepte
            </button>
          </Col>
          <Col>
            {" "}
            <button
              value="concursuri"
              onClick={changeActiveBtn}
              className={activeBtn === "concursuri" ? "active" : "noActive"}
            >
              Concursuri
            </button>
          </Col>
        </Row>
      </Container>
      <Proiecte />
    </Layout>
  )
}
export default Lucrari
