export type Attendee = {
    id: number
    firstName: string
}

export interface Props {
    attendees: Attendee[]
    moveLeft: boolean
    moveRight: boolean
}
