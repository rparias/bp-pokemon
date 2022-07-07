import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPokemonList,
  getPokemonList,
  getPokemonListFetchStatus,
  fetchPokemonListByRegisters
} from '../../redux/reducers/pokemonListSlice'

export default function PokemonDisplay() {
  const dispatch = useDispatch()
  const pokemonList = useSelector(getPokemonList)
  const pokemonListStatus = useSelector(getPokemonListFetchStatus)

  return (
    <div>
      {/* Display the current user name */}
      <div>{JSON.stringify(pokemonList)}</div>
      {/* On button click, dispatch a thunk action to fetch a user */}
      <button onClick={() => dispatch(fetchPokemonList())}>Fetch pokemon list</button>
      <button onClick={() => dispatch(fetchPokemonListByRegisters(1))}>Fetch 1 register</button>
      {/* At any point if we're fetching a user, display that on the UI */}
      {pokemonListStatus === 'loading' && <div>Fetching pokemon list...</div>}
    </div>
  )
}
