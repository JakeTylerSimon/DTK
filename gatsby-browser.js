import React from "react"
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

import AuthProvider from "./src/components/AuthContext";

export const wrapRootElement = ({ element }) => (
    <AuthProvider >
        {element}
    </AuthProvider>
); 