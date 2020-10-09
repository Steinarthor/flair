import React, { useState, useEffect, useRef } from 'react'
import { Props, FilterSelection } from './types'
import Expand from '../../icons/expand_more-24px.svg'
import Computer from '../../icons/computer-24px.svg'
import Music from '../../icons/audiotrack-24px.svg'
import Art from '../../icons/color_lens-24px.svg'
import Sport from '../../icons/sports_baseball-24px.svg'
import styles from './filterDropdown.scss'

const colorMap: { [key: string]: string } = {
    Programming: '#bb86fc',
    Art: '#ff57bb',
    Music: '#03dac6',
    Sports: ' #00b0ff',
}


const iconMap: { [key: string]: JSX.Element } = {
    Programming: <Computer />,
    Art: <Art />,
    Music: <Music />,
    Sports: <Sport />,
}

const constructSelectionState = (filters: string[]): FilterSelection[] => {
    return filters.map((filter: string, index: number) => ({id: index, value: filter, isChecked: false}));
};

const constructCallbackValues = (filters: FilterSelection[]): string[] => {
    return filters.reduce((accFilter: string[], filter: FilterSelection) => {
        if (filter.isChecked) {
            accFilter.push(filter.value)
        }
        return accFilter;
    }, [])
};

//TODO: This component is a bit specific to gategories at the moment.
const FilterDropDown: React.FC<Props> = ({ filterValues, callback }: Props) => {
    const [filters, setFilter] = useState<FilterSelection[]>(constructSelectionState(filterValues))
    const [showFilter, toggleFilter] = useState<boolean>(false)
    const node = useRef<HTMLDivElement>(null)
    const handleClickOutside = (event: Event) => {
        // TODO: Add ESC key
        if (node.current && !node.current.contains(event.target as Node)) {
            toggleFilter(false)
        }
    }
    const selectFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFilter = filters.map((filter: FilterSelection) => {
            return filter.value === event.target.value ? {...filter, isChecked: !filter.isChecked} : filter
        })
        setFilter(selectedFilter) 
        const test = constructCallbackValues(selectedFilter)
        callback(test)
    };
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false)
        return () => {
            document.removeEventListener('click', handleClickOutside, false)
        }
    }, [])
    return (
        <div className={styles.filterDropdown} ref={node}>
            <button
                className={styles.filterToggleButton}
                onClick={() => toggleFilter((state) => !state)}
            >
                <span>Filter by category</span>
                <Expand />
            </button>
            {showFilter && (
                <div className={styles.filterItemContainer}>
                    <ul>
                        {filters.map(
                            (filterValue: FilterSelection, index: number) => (
                                <li
                                    key={`${filterValue}-${index}`} 
                                >
                                    <label
                                        htmlFor={filterValue.value}
                                        className={styles.filterValue}
                                    >
                                        <span style={{ backgroundColor: `${colorMap[filterValue.value]}` }}>{iconMap[filterValue.value]} {filterValue.value}</span>
                                        <input
                                            id={filterValue.value}
                                            name={filterValue.value}
                                            type="checkbox"
                                            onChange={selectFilter}
                                            value={filterValue.value}
                                            checked={filterValue.isChecked}
                                            className={styles.filterCheckbox}
                                        />
                                    </label>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default FilterDropDown
