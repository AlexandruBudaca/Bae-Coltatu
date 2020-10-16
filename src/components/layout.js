import React from "react"
import PropTypes from "prop-types"
import { Location } from "@reach/router"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Location>{({ location }) => <Navbar location={location} />}</Location>

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
            © {new Date().getFullYear()} BAE
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
