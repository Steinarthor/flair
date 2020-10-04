export interface EventRowType {
    type: string
    startTime: Date
    endTime: Date
    place: string
    title: string
}

export interface Props {
    eventRow: EventRowType
}
