import React from 'react'
import { Redirect } from '@reach/router'

const PrivateRoute = (props: any) => {
    const loggedIn = Boolean(localStorage.getItem('token'))
    let { as: Comp, ...otherProps } = props

    return loggedIn ? (
        <Comp {...otherProps} />
    ) : (
        <Redirect to="/" replace={true} noThrow={true} />
    )
}

export default PrivateRoute
