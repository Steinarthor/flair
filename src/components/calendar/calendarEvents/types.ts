export interface Event {
    id: number
    title: string
    hoast: string
    time: number
    duration: number
    category:
        | 'art'
        | 'books'
        | 'dance'
        | 'film'
        | 'food and drink'
        | 'music'
        | 'programming'
        | 'sports'
    location: string
}
