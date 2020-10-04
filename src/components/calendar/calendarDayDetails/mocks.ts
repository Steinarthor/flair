import { EventRowType } from '../eventRow/types'
import { add } from 'date-fns'

const eventRowMocks: EventRowType[] = [
    {
        type: 'Programming',
        startTime: add(new Date(), { hours: 2 }),
        endTime: add(new Date(), { hours: 4 }),
        place: 'Reykjavík',
        title: 'Javascript meetup',
    },
    {
        type: 'Art',
        startTime: add(new Date(), { hours: 3 }),
        endTime: add(new Date(), { hours: 5 }),
        place: 'Keflavík',
        title: 'Erró',
    },
    {
        type: 'Programming',
        startTime: add(new Date(), { hours: 3 }),
        endTime: add(new Date(), { hours: 5 }),
        place: 'Reykjavík',
        title: 'Golang meetup',
    },
    {
        type: 'Sports',
        startTime: add(new Date(), { hours: 3 }),
        endTime: add(new Date(), { hours: 5 }),
        place: 'Keflavík',
        title: 'Keflavík vs Njarðvík',
    },
    {
        type: 'Music',
        startTime: add(new Date(), { hours: 3 }),
        endTime: add(new Date(), { hours: 5 }),
        place: 'Reykjavík',
        title: 'James Blake',
    },
    {
        type: 'Programming',
        startTime: add(new Date(), { hours: 6 }),
        endTime: add(new Date(), { hours: 8 }),
        place: 'Reykjavík',
        title: 'ReasonML meetup',
    },
]

export default eventRowMocks
