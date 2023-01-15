import {render, screen} from '@testing-library/react'
import DateParser from "@/components/DateParser/DateParser";

describe('DateParser test', () => {
  it('date component should display the correct date', () => {
    const mockDate = '2021-01-01T00:00:00.000Z';
    render(<DateParser date={mockDate} />);
    expect(screen.getByText('January 1, 2021')).toBeInTheDocument();
  });

})
