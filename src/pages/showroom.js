import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from "react-bootstrap"
import "../components/Styles/showroom.css"

const Showroom = () => {
  return (
    <Layout>
      <SEO title="Showroom" />
      <Container className="showroom-container">
        <div>SHOWROOM</div>
      </Container>
    </Layout>
  )
}

export default Showroom
