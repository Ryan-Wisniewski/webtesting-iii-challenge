// Test away!
import React from 'react'
import Display from './Display'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// afterEach(cleanup)

describe('<Dislplay />', ()=> {
    it('renders without crashing', () => {
        render(<Display />)
    })
    it('open and unlocked', () => {
        const { getByText, queryByText } = render(<Display closed={false} locked={false}/>)
        const unlock = getByText(/unlocked/i)
        const open = getByText(/open/i)
        expect(unlock.className).toMatch(/green-led/i)
        expect(open.className).toMatch(/green-led/i)
        //checks to see state is not closed does not exsist on first render
        expect(queryByText(/closed/i)).toBeFalsy()
    })
    it('closed and unlocked', () => {
        const { getByText, queryByText } = render(<Display closed={true} locked={false}/>)
        const unlock = getByText(/unlocked/i)
        const clocsed = getByText(/closed/i)
    })
    it('closed and locked', () => {
        const { getByText, queryByText } = render(<Display closed={true} locked={true}/>)
        const locked = getByText(/^locked$/i)
        const closed = getByText(/closed/i)
    })
})