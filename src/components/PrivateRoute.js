// import React from "react"
// import PropTypes from "prop-types"
// import { navigate } from "gatsby"
// import { useAuthValue } from './AuthContext'

// const PrivateRoute = ({ component: Component, location, ...rest }) => {

//   const {currentUser} = useAuthValue()
//   if(!currentUser){
//     navigate("/login")
//     return null
//   }

//   return <Component {...rest} />
// }

// PrivateRoute.propTypes = {
//   component: PropTypes.any.isRequired,
// }

// export default PrivateRoute