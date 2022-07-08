import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/test-utils'
import userEvent from '@testing-library/user-event'
import PokemonDisplay from '../PokemonDisplay'

describe('PokemonDisplay', () => {
  test('fetches & receives a pokemon list after clicking the fetch pokemon list button', async () => {
    renderWithProviders(<PokemonDisplay />)

    expect(screen.getByText(/there are no pokemon list/i)).toBeInTheDocument()
    expect(screen.queryByText(/fetching pokemon list\.\.\./i)).not.toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /fetch pokemon list/i }))
    expect(screen.getByText(/there are no pokemon list/i)).toBeInTheDocument()

    expect(await screen.findByText(/pikachu/i)).toBeInTheDocument()
    expect(screen.queryByText(/there are no pokemon list/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/fetching pokemon list\.\.\./i)).not.toBeInTheDocument()
    await screen.findByText(/wartortle/i)
  })
})
