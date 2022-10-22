import { render, screen, within } from '@testing-library/react'
import Header from '../Header'

describe('when rendered with props', () => {
  it('should paste it into Header component', async () => {
    render(
      <Header
        selectedMonth='june'
        header={'Journey list'}
        setSelectedMonth={(val: string) => val}
      />,
    )
    const header = screen.getByText(/Journey list/)
    expect(header).toBeInTheDocument()
    const autocomplete = screen.getByTestId('autocomplte')
    const input = within(autocomplete).getByRole('combobox')
    autocomplete.focus()
    expect(input).toHaveValue('june')
  })
})
