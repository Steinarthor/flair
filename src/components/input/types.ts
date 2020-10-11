export interface Props {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    type: string
    placeholder?: string
}
