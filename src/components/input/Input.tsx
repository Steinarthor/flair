import React from 'react'
import { Props } from './types'
import styles from './input.scss'

const Input: React.FC<Props> = ({
    onChange,
    onBlur,
    value,
    placeholder,
    name,
    type,
    required,
    showError,
}: Props) => {
    return (
        <div className={styles.input}>
            <input
                value={value}
                type={type}
                required={required}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                name={name}
            />
            {showError && <span>Error</span>}
        </div>
    )
}

export default Input
