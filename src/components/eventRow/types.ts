export interface EventRowType {
    id: number
    type: string
    startTime: Date
    endTime: Date
    place: string
    title: string
    tags: string[]
    slug: string
}

export interface Props {
    eventRow: EventRowType
}
