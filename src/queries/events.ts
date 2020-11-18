import { gql } from '@apollo/client'

export const EVENTS = gql`
    query {
        events {
            id
            title
            host
            time
            duration
            category
            location
        }
    }
`