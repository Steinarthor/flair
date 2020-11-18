import React, { useState, useEffect, useRef } from 'react'
import { useContext, useDispatch } from '../../context/Context'
import styles from './locationPicker.scss'

const locationConfig = [
    {
        text: 'Reykjavík',
    },
    {
        text: 'London',
    },
    {
        text: 'New York',
    },
    {
        text: 'Riga',
    },
    {
        text: 'Keflavík',
    },
]

const LocationPicker: React.FC = () => {
    const node = useRef<HTMLDivElement>(null)
    const context = useContext()
    const dispatch = useDispatch()
    const [showLocationList, toggleLocationList] = useState(false)
    const [selectedLocation, setSelectedLocation] = useState(context.location)
    const toggleLocationNav = () => toggleLocationList(!showLocationList)
    const selectLocation = (location: string) => {
        toggleLocationList(false)
        setSelectedLocation(location)
        localStorage.setItem('location', JSON.stringify(location))
        dispatch({
            type: 'SET_LOCATION',
            payload: {
                location: location,
            },
        })
    }

    const handleClickOutside = (event: Event) => {
        // TODO: Add ESC key
        if (node.current && !node.current.contains(event.target as Node)) {
            toggleLocationList(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false)
        return () => {
            document.removeEventListener('click', handleClickOutside, false)
        }
    }, [])
    return (
        <div className={styles.location} ref={node}>
            <span
                onClick={toggleLocationNav}
                onKeyPress={toggleLocationNav}
                role="button"
                tabIndex={0}
            >
                {selectedLocation}
            </span>
            {showLocationList && (
                <div className={styles.locationList}>
                    {locationConfig.map(({ text }) => {
                        return (
                            <div
                                key={text}
                                className={styles.locationItem}
                                role="button"
                                tabIndex={0}
                                onKeyPress={() => selectLocation(text)}
                                onClick={() => selectLocation(text)}
                            >
                                <span className={styles.locationText}>
                                    {text}
                                </span>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default LocationPicker
