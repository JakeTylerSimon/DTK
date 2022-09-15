import React from "react"

import { useAuthValue } from "../components/AuthContext";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../components/firebase";
import Layout from "../components/layout";
import { navigate } from "gatsby";

const Profile = () => {
  const { currentUser } = useAuthValue();
  const clickLogin = () => {
    navigate("/login");
  };
  return (
    <Layout>
        <div>
        <p>Welcome back to your profile, {currentUser.email}!</p>
        <p>
            This is a client-only route. You could set up a form to save information
            about a user here.
        </p>
        <span onClick={clickLogin}>Sign Out</span>
        </div>
    </Layout>
  )
}

export default Profile