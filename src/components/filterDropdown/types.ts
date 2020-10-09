export interface FilterSelection {
    id: number
    value: string
    isChecked: boolean
}

export interface Props {
    filterValues: string[]
    callback: (filter: string[]) => void
}