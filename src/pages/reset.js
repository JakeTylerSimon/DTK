// import React, { useState } from "react";
// import { Link, navigate } from "gatsby";
// import { auth } from "../components/firebase";
// import { sendPasswordResetEmail } from "firebase/auth";
// import Layout from "../components/Layout";

// const Reset = () => {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await sendPasswordResetEmail(auth, email);
//       navigate(`/app/login`);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <Layout>
//       <div className="login">
//         <div className="login__container">
//           {error && <div className="auth__error">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               required
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="E-mail Address"
//             />
//             <button>Forgot Password</button>
//           </form>
//           <div>
//             Already have an account? <Link to="/login">Login</Link> now.
//           </div>
//           <div>
//             Don't have an account? <Link to="/register">Register</Link> now.
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Reset;