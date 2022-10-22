import { render, screen } from '@testing-library/react'

import InfoCard from '../InfoCard'
import StationCard from '../StationCard'

describe('when rendered with a `text` and `value` props', () => {
  it('should paste it into inforcard', () => {
    render(<InfoCard text='Total number of journey' value={25} />)
    const text = screen.getByText(/Total number of journey/)
    const value = screen.getByText(/25/)
    expect(text).toBeInTheDocument()
    expect(value).toBeInTheDocument()
  })
})

describe('when rendered with a various props', () => {
  it('should paste it into StationCard', () => {
    render(
      <StationCard
        id={501}
        name='Hanasaari'
        address='Hanaholmsstranden'
        city='Espoo'
        capacity={10}
      />,
    )
    const name = screen.getByText(/Hanasaari/)
    const address = screen.getByText(/Hanaholmsstranden/)
    const city = screen.getByText(/Espoo/)
    const capacity = screen.getByText(/10/)
    expect(name).toBeInTheDocument()
    expect(address).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(capacity).toBeInTheDocument()
  })
})
