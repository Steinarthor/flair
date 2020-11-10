export interface Props {
    callback: () => void
}

export interface Auth {
    username: string
    password: string
    message?: string
}
