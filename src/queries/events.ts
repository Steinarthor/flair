import { gql } from '@apollo/client'

export const EVENTS = gql`
    query {
        events {
            id
            title
            hoast
            time
            duration
            category
            location
        }
    }
`
