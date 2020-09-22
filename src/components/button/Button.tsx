import React from 'react'
import classNames from 'classnames/bind'
import { Props } from './types'
import styles from './button.scss'
const cx = classNames.bind(styles)

const Button: React.FC<Props> = ({
    id,
    text,
    className,
    onClick,
    type,
}: Props) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            className={cx('button', className)}
        >
            {text}
        </button>
    )
}

export default Button
