// Test away
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Dashbaord from './Dashboard'

describe('<Dashboard />', () => {
    it('renders without crashing', () =>{
        render(<Dashbaord />)
    })
})
describe('<Dashboard /> state transition', () => {
    
    it('default state open and unlocked',() => {  
        const { getByText } = render(<Dashbaord />)     
        //verify open and unlocked
        getByText(/^open$/i)
        getByText(/^unlocked$/i)

        const lockBtn = getByText(/^lock gate$/i)
        const closeBtn = getByText(/^close gate$/i)        
    })
    it('open and unlocked to closed and unlocked', () => {
        const { getByText } = render(<Dashbaord />)
        const closeBtn = getByText(/^close gate$/i)
        fireEvent.click(closeBtn)
        //check display text
        getByText(/^closed$/i)
        getByText(/^unlocked$/i)
        //check button text
        getByText(/^lock gate$/i)
        getByText(/^open gate$/i)
    })
    it('closed and unlocked to closed and locked', () => {
        const { getByText } = render(<Dashbaord />)
        const lockBtn = getByText(/^lock gate$/i)
        fireEvent.click(lockBtn)
        //check display text
        getByText(/^closed$/i)
        getByText(/^locked$/i)
        //check button text
        getByText(/^unlock gate$/i)
        getByText(/^open gate$/i)
    })
})