import React, { useState } from 'react'
import Login from './login/Login'
import Signup from './signup/Signup'

const Auth: React.FC = () => {
    const [showLogin, toggleLogin] = useState<boolean>(true)
    const toggleAuth = () => {
        toggleLogin((state) => !state)
    }
    return (
        <>
            {showLogin ? (
                <Login callback={toggleAuth} />
            ) : (
                <Signup callback={toggleAuth} />
            )}
        </>
    )
}

export default Auth
