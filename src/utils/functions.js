import React from "react"
import { Modal, Form } from "react-bootstrap"
import "../components/Styles/draw.css"

export function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Trimite schita
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              onChange={props.handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              onChange={props.handleOnChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="message"
              onChange={props.handleOnChange}
            />
          </Form.Group>

          <button className="sendDraw-btn" type="submit">
            Submit
          </button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="sendDraw-btn" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export function fetchFromServer(url, data, method) {
  const resFetch = fetch(url, {
    method: method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return resFetch
}
