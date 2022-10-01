// import React, { useState, useContext } from "react"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import News from "../components/newsletter"

// import { Link, navigate } from "gatsby"
// import { auth } from "../components/firebase";
// import { signInWithEmailAndPassword } from "firebase/auth"

// const RootIndex = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")

//   const handleSubmit = async e => {
//     e.preventDefault()
//     try {
//       await signInWithEmailAndPassword(auth, email, password)
//       navigate(`/profile`)
//     } catch (err) {
//       setError(err.message)
//     }
//   }

//   return (
//     <Layout>
//       <Seo title="Log In" />

//       <div className="">
//         <div className="containery-log">
//           <div class="contact-boxy">
//             <div class="righty">
//               <h2>Welcome Back</h2>
//               {error && <div className="auth__error">{error}</div>}
//               <form onSubmit={handleSubmit} action="">
//                 <input
//                   type="email"
//                   name="email"
//                   class="field"
//                   placeholder="Your Email"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="password"
//                   name="password"
//                   class="field"
//                   placeholder="Password"
//                   value={password}
//                   onChange={e => setPassword(e.target.value)}
//                   required
//                 />
//                 <button class="contact_btn">Log In</button>
//               </form>
//               <div>
//                 <Link to="/reset">Forgot Password</Link>
//               </div>
//               <div>
//                 Don't have an account? <Link to="/signup">Register</Link>{" "}
//                 now.
//               </div>
//             </div>
//             <div class="lefty-log"></div>
//           </div>
//         </div>
//       </div>

//       {/* <News /> */}
//     </Layout>
//   )
// }
// export default RootIndex
