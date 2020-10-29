import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CanvasDraw from "react-canvas-draw"
import { CompactPicker } from "react-color"
import { Container, Row } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import { MyVerticallyCenteredModal, fetchFromServer } from "../utils/functions"
// import wb from "../assets/whiteBackground.jpg"

import "../components/Styles/draw.css"

const Drawing = () => {
  const [image, setImage] = useState("")
  const [brushRadius, setBrushRadius] = useState(5)
  const [lazyRadius, setLazyRadius] = useState(5)
  const [brushColor, setBrushColor] = useState("black")
  const [modalShow, setModalShow] = useState(false)
  const [newEmail, setNewEmail] = useState({
    name: " ",
    email: "",
    subject: "",
    toEmail: "",
    message: "",
    draw: "",
  })
  const [changeColor, setChangeColor] = useState(false)
  const [postShow, setShowPost] = useState(false)
  const [messageModal, setMessageModal] = useState("")

  let saveableCanvas

  const handleOnChange = e => {
    const newEmailUser = {
      ...newEmail,
      [e.target.name]: e.target.value,
    }
    setNewEmail(newEmailUser)
  }
  const handleSubmit = e => {
    e.preventDefault()
    newEmail["draw"] = image
    fetchFromServer(
      "https://draw-app-bae.herokuapp.com/send",
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
    setModalShow(false)
  }

  const handleClose = () => setShowPost(false)
  return (
    <Layout>
      <SEO title="Deseneaza" />
      <Container className="draw-container">
        <Row className="draw-row">
          <div className="clear-btns">
            <button
              onClick={() => {
                saveableCanvas.clear()
              }}
            >
              Clear
            </button>
            <button
              onClick={() => {
                saveableCanvas.undo()
              }}
            >
              Undo
            </button>
            <button
              onClick={() => {
                localStorage.setItem(
                  "savedDrawing",
                  saveableCanvas.getSaveData()
                )
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                saveableCanvas.loadSaveData(
                  localStorage.getItem("savedDrawing")
                )
              }}
            >
              Load
            </button>
          </div>

          <label>
            Marime:
            <input
              type="number"
              value={brushRadius}
              onChange={e => {
                setBrushRadius(parseInt(e.target.value, 10))
              }}
            />
          </label>

          <label>
            Raza:
            <input
              type="number"
              value={lazyRadius}
              onChange={e => setLazyRadius(parseInt(e.target.value, 10))}
            />
          </label>

          <div className="changeColor-container">
            <button
              className="changeColor-btn"
              onClick={() => setChangeColor(!changeColor)}
            >
              Schimba culoarea
            </button>
            <div
              style={{
                backgroundColor: brushColor,
                width: "20px",
                height: "20px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            ></div>
            {changeColor && (
              <CompactPicker
                onChangeComplete={color => {
                  setBrushColor(color.hex)
                  setChangeColor(!changeColor)
                }}
                className=""
              />
            )}
          </div>
          {/* <div>
        <input
          type="file"
          onChange={function (e) {
            let img = new Image();
            img.onload = function () {
              saveableCanvas.canvasContainer.children[3]
                .getContext("2d")
                .drawImage(img, 0, 0);
              saveableCanvas.drawImage();
            };
            img.src = URL.createObjectURL(e.target.files[0]);
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            let img = new Image();
            img.onload = function () {
              saveableCanvas.canvasContainer.children[3]
                .getContext("2d")
                .drawImage(img, 0, 0);
            };

            img.src = wb;
          }}
        >
          delete image
        </button>
      </div> */}
          <Modal show={postShow} onHide={handleClose}>
            <Modal.Body>{messageModal}</Modal.Body>
            <Modal.Footer>
              <burrin className="sendDraw-btn" onClick={handleClose}>
                Close
              </burrin>
            </Modal.Footer>
          </Modal>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            onChange={handleOnChange}
            onSubmit={handleSubmit}
          />
          <CanvasDraw
            ref={CanvasDraw => (saveableCanvas = CanvasDraw)}
            brushColor={brushColor}
            hideGrid={false}
            hideInterface={true}
            brushRadius={brushRadius}
            lazyRadius={lazyRadius}
            style={{ backgroundColor: "white" }}
            className="canvas"
          />
          <button
            className="sendDraw-btn"
            onClick={function () {
              let canvas = saveableCanvas.canvasContainer.children[1]
              let baseCanvas = saveableCanvas.canvasContainer.children[3]
              let canvasContext = baseCanvas.getContext("2d")
              canvasContext.drawImage(
                saveableCanvas.canvasContainer.children[1],
                0,
                0
              )
              canvasContext.globalCompositeOperation = "destination-over"
              canvasContext.fillStyle = "white"
              canvasContext.fillRect(0, 0, canvas.width, canvas.height)
              let dataURL = baseCanvas.toDataURL("image/jpeg")
              setImage(dataURL)
              setModalShow(true)
            }}
          >
            Trimite schita
          </button>
        </Row>
      </Container>
    </Layout>
  )
}
export default Drawing
