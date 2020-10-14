export interface Props {
    callback: () => void
}

export interface Auth {
    email: string
    username: string
    password: string
    hasSubmitted: boolean
}
