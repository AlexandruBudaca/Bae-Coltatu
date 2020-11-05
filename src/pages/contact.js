import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { fetchFromServer } from "../utils/functions"
import Form from "react-bootstrap/Form"
import { Container, Button } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import "../components/Styles/contact.css"
const Contact = () => {
  const [postShow, setShowPost] = useState(false)
  const [messageModal, setMessageModal] = useState("")
  const [newEmail, setNewEmail] = useState({
    name: "",
    email: "",
    message: "",
  })
  const handleClose = () => setShowPost(false)

  const handleOnChange = e => {
    const newEmailUser = {
      ...newEmail,
      [e.target.name]: e.target.value,
    }

    setNewEmail(newEmailUser)
  }
  const handleSubmit = e => {
    e.preventDefault()
    fetchFromServer(
      "https://draw-app-bae.herokuapp.com/contact",
      newEmail,
      "POST"
    ).then(response => {
      if (response.status === 200) {
        setShowPost(true)
        setMessageModal("Mesajul a fost trimis cu success!")
      } else {
        setShowPost(true)
        setMessageModal("Opps ceva nu e bine!")
      }
    })
    e.target.reset()
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <Container className="contact-container">
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nume</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Nume"
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleOnChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mesaj</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Button type="submit" className="contact-button">
            Submit
          </Button>
        </Form>
        <div className="contact-rectangle"></div>
      </Container>
      <Modal show={postShow} onHide={handleClose}>
        <Modal.Body>{messageModal}</Modal.Body>
        <Modal.Footer>
          <button className="sendDraw-btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}

export default Contact
