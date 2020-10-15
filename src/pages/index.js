import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "react-bootstrap/Carousel"
import one from "../images/1.jpg"
import two from "../images/2.jpg"
import three from "../images/3.jpg"
import "../components/Styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Carousel pause={false} interval={2000}>
      <Carousel.Item>
        <img className="d-block w-100" src={one} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={two} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={three} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
    <div className="carousel-container"> </div>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
