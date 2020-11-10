import React from 'react'

export interface Props {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    type: string
    required: boolean
    placeholder?: string
    showError: boolean
}
