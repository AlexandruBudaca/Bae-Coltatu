import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Proiecte from "../components/proiecte"
import Concursuri from "../components/concursuri"
import Concepte from "../components/concepte"
import { Container, Row, Col } from "react-bootstrap"
import "../components/Styles/lucrari.css"

const Lucrari = props => {
  const [activeBtn, setActiveBtn] = useState("proiecte")
  const myData = props.data.allMongodbColtatuProiecte.edges
  console.log(myData)

  const changeActiveBtn = e => {
    setActiveBtn(e.target.value)
  }

  return (
    <Layout>
      <Container className="lucrari-container">
        <Row className="row-lucrari">
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
      {activeBtn === "proiecte" ? <Proiecte pic={myData} /> : null}
      {activeBtn === "concepte" ? <Concepte /> : null}
      {activeBtn === "concursuri" ? <Concursuri /> : null}
    </Layout>
  )
}
export default Lucrari

export const pageQuery = graphql`
  query {
    allMongodbColtatuProiecte {
      edges {
        node {
          linkuri
          titlu
        }
      }
    }
  }
`
