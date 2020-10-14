import React, { ChangeEvent, useState } from 'react'
import { Props, Auth } from './types'
import Input from '../../input/Input'
import Button from '../../button/Button'
import Facebook from '../../../icons/facebook-app-symbol.svg'
import Google from '../../../icons/google-plus.svg'
import Twitter from '../../../icons/twitter.svg'
import styles from './login.scss'

const Login: React.FC<Props> = ({ callback }: Props) => {
    const [loginState, setLoginState] = useState<Auth>({
        email: '',
        password: '',
        hasSubmitted: false,
    })

    const updateLogin = (event: ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...loginState,
            [event.target.name]: event.target.value,
        }
        setLoginState(newState)
    }
    const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoginState((state) => ({ ...state, hasSubmitted: true }))
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
                </div>
            </div>
            <div className={styles.loginInput}>
                <Input
                    name="email"
                    type="string"
                    required
                    showError={false}
                    onChange={updateLogin}
                    onBlur={onBlur}
                    value={loginState.email}
                    placeholder="Email"
                />
                <Input
                    name="password"
                    type="password"
                    required
                    showError={false}
                    onChange={updateLogin}
                    onBlur={onBlur}
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
