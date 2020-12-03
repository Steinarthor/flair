import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from '@reach/router'
import { Signup } from './types'
import { SIGNUP } from '../../mutations/signup'
import { ADD_USER } from '../../mutations/addUser'
import { useMutation } from '@apollo/client'
import { useDispatch } from '../../context/Context'
import Input from '../input/Input'
import Button from '../button/Button'
import styles from './signUp.scss'

const SignUp: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [signupState, setSignupState] = useState<Signup>({
        email: '',
        password: '',
        hasSubmitted: false,
        message: '',
        name: '',
    })
    const [signup] = useMutation(SIGNUP, {
        onCompleted: (data) => {
            localStorage.setItem('token', data.signup.token)
            console.log('DATA', data)
        },
        onError: ({ message }) => {
            console.log('ERROR', message)
        },
    })
    const [addUser] = useMutation(ADD_USER, {
        onCompleted: (data) => {
            console.log('Add User', data)
            dispatch({
                type: 'SET_LOGGED_IN',
                payload: { isLoggedIn: true },
            })
            navigate('./dashboard', { replace: true })
        },
        onError: ({ message }) => {
            console.log('Add user ERROR', message)
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
        await addUser({
            variables: {
                input: {
                    name: signupState.name,
                    email: signupState.email,
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
