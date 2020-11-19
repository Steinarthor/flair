import { gql } from '@apollo/client'

export const EVENTS = gql`
    query events($location: String, $month: Int, $date: Int) {
        events(location: $location, month: $month, date: $date) {
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
