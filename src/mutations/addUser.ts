import { gql } from '@apollo/client'

export const ADD_USER = gql`
    mutation addUser($input: AddUserInput) {
        addUser(input: $input) {
            id
            name
            email
        }
    }
`
