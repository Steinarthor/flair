import React from 'react'
import { Props } from './types'
import styles from './input.scss'

const Input: React.FC<Props> = ({
    onChange,
    value,
    placeholder,
    name,
    type,
}: Props) => {
    return (
        <input
            value={value}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.input}
            name={name}
        />
    )
}

export default Input
