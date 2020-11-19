import { gql } from '@apollo/client'

export const ADD_EVENT = gql`
    mutation addEvent {
        addEvent {
            id
            title
            host
            timestamp
            duration
            category
            location
        }
    }
`
