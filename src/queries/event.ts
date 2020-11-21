import { gql } from '@apollo/client'

export const EVENT = gql`
    query getEvent($id: Int) {
        event(id: $id) {
            id
            title
            host
            timestamp
            duration
            category
            location
            description
            attending {
                id
                firstName
            }
        }
    }
`
