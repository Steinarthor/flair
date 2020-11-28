import { gql } from '@apollo/client'

export const SIGNUP = gql`
    mutation signup($input: SignupInput) {
        signup(input: $input) {
            status
            token
            message
        }
    }
`
