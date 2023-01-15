import {fireEvent, render, screen} from '@testing-library/react'
import {Search} from "@/components/Search/Search";

describe('Search test', () => {
  it('input test', () => {
    render(<Search value={''} setValue={() => {}} />)
    const inputElem = screen.getByTestId('search')
    expect(inputElem).toBeInTheDocument()
  })
  it('typing test', () => {
    const setValue = jest.fn();
    render(<Search value={''} setValue={setValue} />)
    const inputElem = screen.getByTestId('search')
    fireEvent.change(inputElem, { target: { value: 'Hello World!' } });
    expect(setValue).toBeCalledWith('Hello World!')
  })
})
