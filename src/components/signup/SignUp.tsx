import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from '@reach/router'
import { Signup } from './types'
import { SIGNUP } from '../../mutations/signup'
import { useMutation } from '@apollo/client'

import Input from '../input/Input'
import Button from '../button/Button'
import styles from './signUp.scss'

const SignUp: React.FC = () => {
    const navigate = useNavigate()
    const [signupState, setSignupState] = useState<Signup>({
        email: '',
        password: '',
        hasSubmitted: false,
        message: '',
        name: '',
    })

    const [signup] = useMutation(SIGNUP, {
        onCompleted: (data) => {
            console.log('DATA', data)
        },
        onError: ({ message }) => {
            console.log('ERROR', message)
        },
    })

    const updateSignup = (event: ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...signupState,
            [event.target.name]: event.target.value,
        }
        setSignupState(newState)
    }
    const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    const submitSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSignupState((state) => ({ ...state, hasSubmitted: true }))
        await signup({
            variables: {
                input: {
                    password: signupState.password,
                    email: signupState.email,
                    name: signupState.name,
                },
            },
        })
    }

    return (
        <form onSubmit={submitSignup} className={styles.signup}>
            <h1>Create a user</h1>
            <span className={styles.error}>{signupState.message}</span>
            <div className={styles.signupInput}>
                <Input
                    name="email"
                    type="string"
                    required
                    showError={false}
                    onChange={updateSignup}
                    onBlur={onBlur}
                    value={signupState.email}
                    placeholder="Email"
                />
                <Input
                    name="password"
                    type="password"
                    required
                    showError={false}
                    onChange={updateSignup}
                    onBlur={onBlur}
                    value={signupState.password}
                    placeholder="Password"
                />
                <Input
                    name="name"
                    type="string"
                    required
                    showError={false}
                    onChange={updateSignup}
                    onBlur={onBlur}
                    value={signupState.name}
                    placeholder="Name"
                />
                <span
                    onClick={() => navigate('/login', { replace: true })}
                    onKeyPress={() => navigate('/login', { replace: true })}
                    role="button"
                    tabIndex={0}
                >
                    Already have an account? Sign in
                </span>
            </div>
            <div className={styles.signupButton}>
                <Button id="signUpButton" text="Sign up" type="submit" />
            </div>
        </form>
    )
}

export default SignUp
