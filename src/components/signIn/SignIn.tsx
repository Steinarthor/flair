import React, { ChangeEvent, useState } from 'react'
import { Signin } from './types'
import { useNavigate } from '@reach/router'
import { LOGIN } from '../../mutations/login'
import { useMutation } from '@apollo/client'
import Input from '../input/Input'
import Button from '../button/Button'
import styles from './SignIn.scss'

const SignIn: React.FC = () => {
    const [signInState, setSignInState] = useState<Signin>({
        username: '',
        password: '',
        message: '',
    })
    const navigate = useNavigate()
    const [signIn] = useMutation(LOGIN, {
        onCompleted: (data) => {
            if (data.login.status === 201) {
                localStorage.setItem('token', data.login.token)
                navigate('./dashboard', { replace: true })
            } else {
                setSignInState((state) => ({
                    ...state,
                    message: data.login.message,
                }))
            }
        },
        onError: ({ message }) => {
            setSignInState((state) => ({
                ...state,
                message: message,
            }))
        },
    })

    const updateSignIn = (event: ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...signInState,
            [event.target.name]: event.target.value,
        }
        setSignInState(newState)
    }

    const submitSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await signIn({
            variables: {
                input: {
                    username: signInState.username,
                    password: signInState.password,
                },
            },
        })
    }

    return (
        <form onSubmit={submitSignIn} className={styles.signIn}>
            <h1>Welcome</h1>
            <span className={styles.error}>{signInState.message}</span>
            <div className={styles.signInInput}>
                <Input
                    name="username"
                    type="string"
                    required
                    showError={false}
                    onChange={updateSignIn}
                    value={signInState.username}
                    placeholder="Username"
                />
                <Input
                    name="password"
                    type="password"
                    required
                    showError={false}
                    onChange={updateSignIn}
                    value={signInState.password}
                    placeholder="Password"
                />
                <span
                    onClick={() => navigate('/signup', { replace: true })}
                    onKeyPress={() => navigate('/signup', { replace: true })}
                    role="button"
                    tabIndex={0}
                >
                    Need an account? Sign up
                </span>
            </div>
            <div className={styles.signInButton}>
                <Button id="signInButton" text="Log in" type="submit" />
            </div>
        </form>
    )
}

export default SignIn
