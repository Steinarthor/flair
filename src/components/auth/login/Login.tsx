import React, { ChangeEvent, useState } from 'react'
import { Props, Auth } from './types'
import { useNavigate } from '@reach/router'
import { LOGIN } from '../../../mutations/login'
import { useMutation } from '@apollo/client'
import Input from '../../input/Input'
import Button from '../../button/Button'
import Facebook from '../../../icons/facebook-app-symbol.svg'
import Google from '../../../icons/google-plus.svg'
import Twitter from '../../../icons/twitter.svg'
import styles from './login.scss'

const Login: React.FC<Props> = ({ callback }: Props) => {
    const [loginState, setLoginState] = useState<Auth>({
        username: '',
        password: '',
        message: '',
    })
    const navigate = useNavigate()
    const [login] = useMutation(LOGIN)

    const updateLogin = (event: ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...loginState,
            [event.target.name]: event.target.value,
        }
        setLoginState(newState)
    }

    const submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { data } = await login({
            variables: {
                input: {
                    username: loginState.username,
                    password: loginState.password,
                },
            },
        })

        if (data.login.status === 201) {
            localStorage.setItem('token', data.login.token)
            await navigate('./dashboard', { replace: true })
        } else {
            setLoginState((state) => ({
                ...state,
                message: data.login.message,
            }))
        }
    }

    return (
        <form onSubmit={submitLogin} className={styles.login}>
            <div className={styles.loginTypes}>
                <h1>Welcome</h1>
                <div className={styles.loginSocial}>
                    <button>
                        <Facebook /> <span>Facebook</span>
                    </button>
                    <button>
                        <Google /> <span>Google</span>
                    </button>
                    <button>
                        <Twitter /> <span>Twitter</span>
                    </button>
                </div>
                <div className={styles.loginSmallText}>
                    <span>Or use your Flair account</span>
                    <span className={styles.error}>{loginState.message}</span>
                </div>
            </div>
            <div className={styles.loginInput}>
                <Input
                    name="username"
                    type="string"
                    required
                    showError={false}
                    onChange={updateLogin}
                    value={loginState.username}
                    placeholder="Username"
                />
                <Input
                    name="password"
                    type="password"
                    required
                    showError={false}
                    onChange={updateLogin}
                    value={loginState.password}
                    placeholder="Password"
                />
                <button onClick={callback}>Need an account? Sign up</button>
            </div>
            <div className={styles.loginButton}>
                <Button id="loginButton" text="Log in" type="submit" />
            </div>
        </form>
    )
}

export default Login
