import { MouseEvent } from 'react'

type buttonType = 'button' | 'submit'

export interface Props {
    id: string
    type: buttonType
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    text?: string
    className?: string
}
