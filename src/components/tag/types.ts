type Category =
    | 'art'
    | 'books'
    | 'dance'
    | 'film'
    | 'food and drink'
    | 'music'
    | 'programming'
    | 'sports'

export interface Props {
    invert: boolean
    category: Category
    isSelected?: boolean
    handleClick?: (event: Category) => void
    onKeyPress?: (event: Category) => void
}
