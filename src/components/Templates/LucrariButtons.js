import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import "../Styles/lucrariButtons.css"

const LucrariButtons = () => {
  return (
    <Container className="lucrari-container">
      <Row>
        <div className="row-lucrari">
          <Col>
            {" "}
            <Link
              to="/proiecte/"
              activeStyle={{ color: "black" }}
              className="noActive"
            >
              Proiecte
            </Link>
          </Col>
          <Col>
            {" "}
            <Link
              to="/concepte/"
              activeStyle={{ color: "black" }}
              className="noActive"
            >
              Concepte
            </Link>
          </Col>
          <Col>
            {" "}
            <Link
              to="/concursuri/"
              activeStyle={{ color: "black" }}
              className="noActive"
            >
              Concursuri
            </Link>
          </Col>
        </div>
      </Row>
    </Container>
  )
}
export default LucrariButtons
