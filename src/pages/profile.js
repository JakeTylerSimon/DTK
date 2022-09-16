import React from "react"

import { useAuthValue } from "../components/AuthContext";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../components/firebase";
import Layout from "../components/layout";
import { navigate } from "gatsby";
import Seo from "../components/seo";

const Profile = () => {
  const { currentUser } = useAuthValue();
  const clickLogin = () => {
    navigate("/login");
  };
  return (
    <Layout>
        <Seo title="Profile Dashboard" />
        <div>
        <p>Welcome back to your profile, {currentUser.email}!</p>
        <p>
            Your content will be here soon...
        </p>
        <span style={{ cursor: 'pointer' }} onClick={clickLogin}>Sign Out</span>
        </div>
    </Layout>
  )
}

export default Profile