import React, { useEffect, Children, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [isLogin, setIslogin] = React.useState(false)
    const [userToken, setUserToken] = React.useState("Ganapti");

    const login = () => {
        setIslogin(true)
        setUserToken("hhhdhdhdh")
        AsyncStorage.setItem('userToken', "hhhdhdhdh");

        setIslogin(false)
    }
    const logout = () => {
        setIslogin(true)
        setUserToken(null)
        AsyncStorage.removeItem("userToken");
        setIslogin(false)
    }
    const isLoggedIn = async () => {
        try {
            setIslogin(true);
            let userToken = await AsyncStorage.getItem("userToken");
            setIslogin(false)
            setUserToken(userToken)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        isLoggedIn()
    }, [])
    return <AuthContext.Provider value={{ isLogin, userToken, login, logout }}>
        {children}
    </AuthContext.Provider>
}