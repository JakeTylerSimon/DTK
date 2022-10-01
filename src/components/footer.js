import React from 'react'
import { Link } from "gatsby"
import FootLogo from '../images/2.svg'
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const RootIndex = () => {
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
			<div>
				<ul className='footSocial'>
					<Link to='https://www.instagram.com/dtkdreamers/'>
						<BsInstagram className='instagram' />
					</Link>
					<Link to='https://twitter.com/dtkdreamers'>
						<BsTwitter className='twitter' />
					</Link>
				</ul>
			</div>
		</nav>
		<div className="copyright">
			<p>{new Date().getUTCFullYear()} DTK. All rights reserved</p>
			<ul className="terms">
				<li><a href="/terms">Terms & Conditions</a></li>
				<li><a href="/privacy">Privacy Policy</a></li>
			</ul>
		</div>
	</footer>
)}

export default RootIndex