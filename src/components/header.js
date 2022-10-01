import React, {useEffect} from "react"
import { Link } from "gatsby"

import { HiMenuAlt3 } from "react-icons/hi";
import $ from "jquery";
import NavLogo from '../images/3.svg'

const Header = () => {

  useEffect(() => {
    $(".toggle").on("click", function() {
      $(".navLinks").toggle(function() {
        $(".navLinks").css("height", "fit-content");
      });
      if($(".navLinks").hasClass("active_drop")){
        $(".navLinks").removeClass("active_drop");
      }else{
        $(".navLinks").addClass("active_drop");
      }
    });
  });

  return (

    <nav className="navigation">
      <div className="logo">
        <Link to="/">
          <img src={NavLogo} alt="DTK" />
        </Link>
      </div>
      <ul className="navLinks">
        <li>
          {/* <Link to="/"> */}
          <a href="/">Home</a>
            
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/store"> */}
          <a href="/store">Store</a>
            
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/courses"> */}
          <a href="/courses">Courses</a>
            
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/signup"> */}
          <a href="/signup" style={{pointerEvents: "none", color: 'grey'}}>Sign Up</a>
          {/* </Link> */}
        </li>

        {/* <span>|</span> */}
        <li>
          {/* <Link to="/login"> */}
          <a href="/login" style={{pointerEvents: "none", color: 'grey'}}>Login</a>
             
          {/* </Link> */}
        </li>
      </ul>
      <div className="toggle">
         <HiMenuAlt3 />
      </div>
    </nav>
  );
};

export default Header;