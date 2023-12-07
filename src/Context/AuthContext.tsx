import React, { createContext, useContext, useState } from 'react';

type AuthProps = {
    children: React.ReactNode;
};
type AuthContextType = {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProps) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const login = () => {
        setLoggedIn(true);
    };

    const logout = () => {
        setLoggedIn(false);
    };

    const contextValue: AuthContextType = {
        isLoggedIn,
        login,
        logout,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const UseAuth = () => {
    return useContext(AuthContext);
};

const LoginButton = () => {
    const authContext = UseAuth();

    return (
        <button onClick={authContext?.login} disabled={authContext?.isLoggedIn}>
            Login
        </button>
    );
};

const LogoutButton = () => {
    const authContext = UseAuth();

    return (
        <button onClick={authContext?.logout} disabled={!authContext?.isLoggedIn}>
            Logout
        </button>
    );
};
const UserInfo = () => {
    const authContext = UseAuth();

    return (
        <div>
            {authContext?.isLoggedIn ? <p>Welcome! You are logged in.</p> : <p>Please log in to access the content.</p>}
        </div>
    );
};

const App = () => {
    return (
        <AuthProvider>
            <div>
                <LoginButton />
                <LogoutButton />
                <UserInfo />
            </div>
        </AuthProvider>
    );
};

export default App;
