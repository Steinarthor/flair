import React, { ChangeEvent, useState } from 'react'
import { Props, Auth } from './types'
import Input from '../../input/Input'
import Button from '../../button/Button'
import Facebook from '../../../icons/facebook-app-symbol.svg'
import Google from '../../../icons/google-plus.svg'
import Twitter from '../../../icons/twitter.svg'
import styles from './signup.scss'

const Signup: React.FC<Props> = ({ callback }: Props) => {
    const [signupState, setSignupState] = useState<Auth>({
        email: '',
        username: '',
        password: '',
        hasSubmitted: false,
    })

    const updateLogin = (event: ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...signupState,
            [event.target.name]: event.target.value,
        }
        setSignupState(newState)
    }
    const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    const submitSignup = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSignupState((state) => ({ ...state, hasSubmitted: true }))
    }

    return (
        <form onSubmit={submitSignup} className={styles.signup}>
            <div className={styles.signupTypes}>
                <h1>Welcome</h1>
                <div className={styles.signupSocial}>
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
                <div className={styles.signupSmallText}>
                    <span>Or use your Flair account</span>
                </div>
            </div>
            <div className={styles.signupInput}>
                <Input
                    name="email"
                    type="string"
                    required
                    showError={false}
                    onChange={updateLogin}
                    onBlur={onBlur}
                    value={signupState.email}
                    placeholder="Email"
                />
                <Input
                    name="username"
                    type="string"
                    required
                    showError={false}
                    onChange={updateLogin}
                    onBlur={onBlur}
                    value={signupState.username}
                    placeholder="Username"
                />
                <Input
                    name="password"
                    type="password"
                    required
                    showError={false}
                    onChange={updateLogin}
                    onBlur={onBlur}
                    value={signupState.password}
                    placeholder="Password"
                />
                <button onClick={callback}>Already have an account? Sign in</button>
            </div>
            <div className={styles.signupButton}>
                <Button id="signUpButton" text="Sign up" type="submit" />
            </div>
        </form>
    )
}

export default Signup
