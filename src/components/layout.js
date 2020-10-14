import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Styles/navbar.css"
import logo from "../images/logoColtatu.png"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" activeStyle={{ color: `#000` }}>
              Home
            </Link>
            <Link to="/Despre/" activeStyle={{ color: "black" }}>
              Despre
            </Link>
            <Link to="/page-2/" activeStyle={{ color: "gray" }}>
              Proiecte
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <main>{children}</main>
        <footer
          style={{
            // marginTop: `2rem`,
            position: `fixed`,
            bottom: `0`,
            width: `100%`,
            height: `60px`,
            paddingTop: `20px`,
            color: "black",
          }}
        >
          <p
            style={{
              color: "black",
              marginLeft: `1rem`,
            }}
          >
            {" "}
            © {new Date().getFullYear()}, BAE
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
