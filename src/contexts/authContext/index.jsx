import React from "react";
import { createContext, useState, useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();
export function authProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedin, setUserLoggedin] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user })
            setUserLoggedin(true)
        } else {
            setUserLoggedin(false)
        }
        setLoading(false)
    }
    const value = {
        currentUser,
        userLoggedin,
        loading
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}
