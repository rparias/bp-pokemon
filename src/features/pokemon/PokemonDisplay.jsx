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
      <div>
        {pokemonList.length > 0 ? JSON.stringify(pokemonList) : 'There are no pokemon list'}
      </div>
      <button onClick={() => dispatch(fetchPokemonList())}>Fetch pokemon list</button>
      <button onClick={() => dispatch(fetchPokemonListByRegisters(1))}>Fetch 1 register</button>
      {pokemonListStatus === 'loading' && <div>Fetching pokemon list...</div>}
    </div>
  )
}
