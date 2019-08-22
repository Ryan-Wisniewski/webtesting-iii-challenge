// Test away
import React from 'react'
import {render} from '@testing-library/react'
import Dashbaord from './Dashboard'

describe('<Dashboard />', () => {
    it('renders without crashing', () =>{
        render(<Dashbaord />)
    })
    it('default state open and unlocked',() => {
        const { getByText } = render(<Dashbaord />)
        //verify open and unlocked
        getByText(/^open$/i)
        getByText(/^unlocked$/i)

        const lockBtn = getByText(/^lock gate$/i)
        const closeBtn = getByText(/^close gate$/i)
    })
})