import * as React from "react"
import { Link } from "gatsby"
// import Favicon from '../images/favicon.png'

const Header = () => (
  <nav>
    {/* <Link
      to="/"
    >
      <img
        alt="DTK"
        height={75}
        src={Favicon}
      />
    </Link> */}

    <Link to="/">
      Home
    </Link>

    <Link>
      Products
    </Link>

    <Link>
      Courses
    </Link>
  </nav>
)

export default Header
