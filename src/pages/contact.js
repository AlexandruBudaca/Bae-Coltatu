import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Form from "react-bootstrap/Form"
import { Container, Button } from "react-bootstrap"
import "../components/Styles/contact.css"
const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container className="contact-container">
        <Form className="contact-form">
          <Form.Group>
            <Form.Label>Nume</Form.Label>
            <Form.Control type="text" placeholder="Nume" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mesaj</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit" className="contact-button">
            Submit
          </Button>
        </Form>
        <div className="contact-rectangle"></div>
      </Container>
    </Layout>
  )
}

export default Contact
