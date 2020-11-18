import { gql } from '@apollo/client'

export const EVENT = gql`
    query getEvent($id: Int) {
        event(id: $id) {
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
