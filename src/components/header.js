import React from "react"
import { Link, navigate } from "gatsby"

const Header = () => {

  return (

    <nav className="nav">
      <Link to="/">
        Home
      </Link>

      <Link to="/store">
        Store
      </Link>

      <Link to="/courses">
        Courses
      </Link>

      <Link to="/signup">
        Sign Up
      </Link>

      <span>|</span>

      <Link to="/login">
        Login 
      </Link>
    </nav>
  )
}

export default Header
