import React, { useState, useContext } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Feature from "../components/features"
import News from "../components/newsletter"

import { Link, navigate } from "gatsby"
import { auth } from "../components/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"

const RootIndex = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const validatePassword = () => {
    let isValid = true
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false
        setError("Passwords does not match")
      }
    }
    return isValid
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      setError("")
      if (validatePassword()) {
        await createUserWithEmailAndPassword(auth, email, password)
        navigate(`/profile`)
      }
    } catch (err) {
      setError(err.message)
    }
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  return (
    <Layout>
      <Seo title="Sign Up" />

      <div className="">
        <div className="containery-sign">
          <div class="contact-boxy">
            <div class="lefty-sign"></div>
            <div class="righty">
              <h2>Join Us</h2>
              {error && <div className="auth__error">{error}</div>}
              <form onSubmit={handleSubmit} action="">
                <input
                  type="text"
                  class="field"
                  placeholder="Your Name"
                  name="name"
                  required
                />
                <input
                  type="email"
                  class="field"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  class="field"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  class="field"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  required
                  onChange={e => setConfirmPassword(e.target.value)}
                />
                <button value="submit" class="contact_btn">
                  Sign Up
                </button>
              </form>
              <div>
                <Link to="/reset">Forgot Password</Link>
              </div>
              <div>
                Already have an account? <Link to="/login">Login</Link> now.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Feature />
      <News />
    </Layout>
  )
}
export default RootIndex
