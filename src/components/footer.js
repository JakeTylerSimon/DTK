import React from 'react'
import { Link } from "gatsby"
import FootLogo from '../images/2.svg'
// import LinkedIn from '../images/linkedin.svg'
// import Twitter from '../images/twitter.svg'

const footer = ({data}) => {
	return (

	<footer>
		<nav className="footerNavigation">
			<div className="logo">
			<Link to="/">
				<img src={FootLogo} alt="OveDTKrsight" />
			</Link>
			</div>
			<div className="socialLinks">
				<ul className='footerNav'>
					<li className='footLink'>
						<Link to='/'>
							Home
						</Link>
					</li>
					<li className='footLink'>
						<Link to='/store'>
							Store
						</Link>
					</li>
					<li className='footLink'>
						<Link to='/courses'>
							Courses
						</Link>
					</li>
					{/* <li className='footLink'>
						<Link to='/signup'>
							Sign Up
						</Link>
					</li>
					<li className='footLink'>
						<Link to='/login'>
							Log In
						</Link>
					</li> */}
				</ul>
			</div>
			{/* <div>
				<ul className='footSocial'>
					<Link to='https://www.linkedin.com/showcase/oversight-co'>
						<img src={LinkedIn} alt="" />
					</Link>
					<Link to='https://twitter.com/Oversight_Co'>
						<img className='twitter' src={Twitter} alt="" />
					</Link>
				</ul>
			</div> */}
		</nav>
		<div className="copyright">
			<p>{new Date().getUTCFullYear()} DTK. All rights reserved</p>
			<ul class="terms">
				<li><a href="/terms-and-conditions">Terms & Conditions</a></li>
				<li><a href="/privacy-policy">Privacy Policy</a></li>
			</ul>
		</div>
	</footer>
)}

export default footer