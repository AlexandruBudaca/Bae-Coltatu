import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"
import { TweenMax } from "gsap"
import Logo from "../images/logoColtatu.png"
import "./Styles/navbar.css"
import "bootstrap/dist/css/bootstrap.min.css"

const MyNavbar = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  useEffect(() => {
    TweenMax.fromTo("#responsive-navbar-nav", 1.5, { x: `-100%` }, { x: `0%` })
    TweenMax.fromTo(".navbar-brand", 1.5, { y: `-100%` }, { y: `0%` })
    TweenMax.fromTo(".navbar-toggler", 2, { y: `-100%` }, { y: `0%` })
  }, [])

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className={location.pathname === "/" ? "background-home" : null}
      data-testid="navbar"
    >
      <Navbar.Brand href="/">
        <img
          src={Logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle>
        <div className="hamburger" />
        <div className="hamburger" />
        <div className="hamburger" />
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link
            to="/"
            activeStyle={{ color: `white` }}
            className={location.pathname === "/" ? "location-color-home" : null}
          >
            Home
          </Link>
          <Link
            to="/birou/"
            activeStyle={{ color: "black" }}
            className={location.pathname === rootPath ? "location-color" : null}
          >
            Birou
          </Link>
          <Link
            to="/proiecte/"
            activeStyle={{ color: "black" }}
            className={location.pathname === rootPath ? "location-color" : null}
          >
            Lucrari
          </Link>
          <Link
            to="/showroom/"
            activeStyle={{ color: "black" }}
            className={location.pathname === rootPath ? "location-color" : null}
          >
            Showroom
          </Link>
          <Link
            to="/draw/"
            activeStyle={{ color: "black" }}
            className={location.pathname === rootPath ? "location-color" : null}
          >
            Deseneaza
          </Link>
          <Link
            to="/contact/"
            activeStyle={{ color: "black" }}
            className={location.pathname === rootPath ? "location-color" : null}
          >
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default MyNavbar

MyNavbar.propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
}
