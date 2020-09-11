import React from 'react'
import Dropdown, { Props as DropdownTypes } from 'app/components/Dropdown'
import { v4 as uuid } from 'uuid'
import { StyledFilter } from './StyledFilter'
import options from 'app/options'

const Filters: React.FC = () => {
    const dropdowns: DropdownTypes[] = [
        {
            label: 'Spoken Language:',
            defaultLabel: 'Any',
            title: 'Select a spoken language',
            options: options.spokenLanguages,
            selectedOptions: [],
            searchBox: true,
        },
        {
            label: 'Language:',
            defaultLabel: 'Any',
            title: 'Select a language',
            options: options.languages,
            selectedOptions: [],
            searchBox: true,
        },
        {
            label: 'Date range:',
            defaultLabel: 'Today',
            title: 'Adjust time span',
            options: options.dateRange,
            selectedOptions: [],
            searchBox: false,
        },
    ]
    return (
        <StyledFilter className='flex flex-row justify-end p-5 bg-gray-100 rounded-t-lg'>
            {dropdowns.map(dropdown => (
                <Dropdown key={`${uuid()}`} {...dropdown} />
            ))}
        </StyledFilter>
    )
}

export default Filters
