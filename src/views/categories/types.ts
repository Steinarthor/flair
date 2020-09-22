export interface CategoryBox {
    name: string
    url: string
    color: string
    smallBoxes?: Array<{ name: string; url: string; color: string }>
}
