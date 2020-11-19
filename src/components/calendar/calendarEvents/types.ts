export type Category =
    | 'art'
    | 'books'
    | 'dance'
    | 'film'
    | 'food and drink'
    | 'music'
    | 'programming'
    | 'sports'

export interface Event {
    id: number
    title: string
    host: string
    timestamp: string
    duration: number
    category: Category
    location: string
}

export interface Props {
    events: Event[]
    handleTagSelection: (category: Category) => void
    selectedTags: Category[]
    eventTags: Category[]
}
