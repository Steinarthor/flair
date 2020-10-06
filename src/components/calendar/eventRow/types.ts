export interface EventRowType {
    type: string
    startTime: Date
    endTime: Date
    place: string
    title: string
    tags: string[]
}

export interface Props {
    eventRow: EventRowType
}
