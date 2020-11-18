import { gql } from '@apollo/client'

export const EVENTS = gql`
    query events($location: String) {
        events(location: $location) {
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
