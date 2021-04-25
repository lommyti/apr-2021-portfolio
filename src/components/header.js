import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <li
      style={{
        margin: `0 auto`,
        width: "100%",
        padding: `1.45rem 1.0875rem`,
        position: "fixed",
        top: 0,
        zIndex: "99",
      }}
      className="header"
    >
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        HOME
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        ABOUT
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        RESUME
      </Link>
    </li>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
