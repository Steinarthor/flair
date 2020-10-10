import { EventRowType } from '../eventRow/types'
import { add } from 'date-fns'

const eventRowMocks: EventRowType[] = [
    {
        id: 1,
        type: 'Programming',
        startTime: add(new Date(), { hours: 2 }),
        endTime: add(new Date(), { hours: 4 }),
        place: 'Reykjavík',
        title: 'Javascript meetup',
        tags: ['Programming', 'Art'],
        slug: 'javascript-meetup'
    },
    {
        id: 2,
        type: 'Art',
        startTime: add(new Date(), { hours: 3 }),
        endTime: add(new Date(), { hours: 5 }),
        place: 'Keflavík',
        title: 'Erró',
        tags: ['Art'],
        slug: 'erro'
    },
    {
        id: 3,
        type: 'Programming',
        startTime: add(new Date(), { hours: 3 }),
        endTime: add(new Date(), { hours: 5 }),
        place: 'Reykjavík',
        title: 'Golang meetup',
        tags: ['Programming', 'Art'],
        slug: 'golang-meetup'
    },
    {
        id: 4,
        type: 'Sports',
        startTime: add(new Date(), { hours: 3 }),
        endTime: add(new Date(), { hours: 5 }),
        place: 'Keflavík',
        title: 'Keflavík vs Njarðvík',
        tags: ['Sports'],
        slug: 'keflavik-vs-njardvik'
    },
    {
        id: 5,
        type: 'Music',
        startTime: add(new Date(), { hours: 3 }),
        endTime: add(new Date(), { hours: 5 }),
        place: 'Reykjavík',
        title: 'James Blake',
        tags: ['Music'],
        slug: 'james-blake'
    },
    {
        id: 6,
        type: 'Programming',
        startTime: add(new Date(), { hours: 6 }),
        endTime: add(new Date(), { hours: 8 }),
        place: 'Reykjavík',
        title: 'ReasonML meetup',
        tags: ['Programming', 'Art'],
        slug: 'reasonml-meetup'
    },
]

export default eventRowMocks
