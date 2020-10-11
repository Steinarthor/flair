import React from 'react'
import { Props } from './types'
import styles from './login.scss'

const Signup: React.FC<Props> = ({ callback }: Props) => {
    return (
        <div>
            Signup <button onClick={callback}>Log in</button>
        </div>
    )
}

export default Signup
