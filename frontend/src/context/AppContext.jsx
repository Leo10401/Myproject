'use client';
const { useRouter } = require("next/navigation");
const { createContext, useState, useContext } = require("react");

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const router = useRouter();

    const [userLoggedIn, setUserLoggedIn] = useState(
        localStorage.getItem("token") || false
    );

    const logout = () => {
        localStorage.removeItem("token");
        setUserLoggedIn(false);
        router.push('/login');
    }
    return <AppContext.Provider value={{ userLoggedIn, setUserLoggedIn, logout }}>
        {children}
    </AppContext.Provider>

}

const useAppContext = () => useContext(AppContext);

export default useAppContext;