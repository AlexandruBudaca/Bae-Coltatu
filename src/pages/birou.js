import React from "react"
// import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/Styles/birou.css"

const Despre = () => (
  <Layout>
    <SEO title="Birou" />
    <Container className="despre-container">
      <Row>
        <Col lg={10}>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Despre">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Various versions have evolved over the years, sometimes
              by accident, sometimes on purpose (injected humour and the like).
            </Tab>
            <Tab eventKey="profile" title="Ce facem">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Tab>
            <Tab eventKey="contact" title="Puncte de lucru">
              <div>
                <p>Unu</p>
              </div>
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Various versions have evolved over the years, sometimes
              by accident, sometimes on purpose (injected humour and the like).
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <div className="despre-rectangle" />
    </Container>
  </Layout>
)

export default Despre
