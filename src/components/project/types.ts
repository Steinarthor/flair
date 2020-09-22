import { Project } from '../../views/projects/types'

export interface Props extends Project {
    color: string
    id: number
    category: string
}
