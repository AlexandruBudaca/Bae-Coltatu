import React, { useState, useEffect } from "react"
import { Location } from "@reach/router"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const time = setTimeout(() => {
      setShowNavbar(true)
    }, 150)
    return () => clearTimeout(time)
  })

  return (
    <>
      {showNavbar && (
        <Location>{({ location }) => <Navbar location={location} />}</Location>
      )}

      <div>
        <main>{children}</main>
        <footer
          style={{
            position: `fixed`,
            bottom: `0`,
            width: `100%`,
            height: `60px`,
            paddingTop: `20px`,
            color: "black",
            zIndex: `2000`,
          }}
        >
          <Location>
            {({ location }) => (
              <p
                style={{
                  color: `${
                    location.pathname === "/" ? "rgb(249, 252, 66)" : "black"
                  }`,
                  marginLeft: `1rem`,
                }}
              >
                © {new Date().getFullYear()} BAE
              </p>
            )}
          </Location>
        </footer>
      </div>
    </>
  )
}

export default Layout
