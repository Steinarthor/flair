import { gql } from '@apollo/client'

export const EVENT_LOCATION = gql`
    query getEventLocation($location: String) {
        eventLocation(location: $location) {
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
