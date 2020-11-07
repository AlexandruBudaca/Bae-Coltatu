import React from "react"
import PropTypes from "prop-types"
import { Modal, Form } from "react-bootstrap"
import "../components/Styles/draw.css"

export function MyVerticallyCenteredModal(props) {
  const { handleOnChange } = props
  const { handleSubmit } = props
  const { onHide } = props
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
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleOnChange}
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
              onChange={handleOnChange}
            />
          </Form.Group>

          <button className="sendDraw-btn" type="submit">
            Submit
          </button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="sendDraw-btn" onClick={onHide} type="button">
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

MyVerticallyCenteredModal.propTypes = {
  handleOnChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  onHide: PropTypes.func,
}
