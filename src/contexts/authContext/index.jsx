import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
export function authProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedin, setUserLoggedin] = useState(false);
    const [loading, setLoading] = useState(true);

}
