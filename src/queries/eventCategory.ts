import { gql } from '@apollo/client'

export const EVENT_CATEGORY = gql`
    query getEventCategory($category: String, $location: String) {
        eventCategory(category: $category, location: $location) {
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
