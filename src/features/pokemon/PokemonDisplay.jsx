import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createNewPokemon,
  deletePokemonById,
  updatePokemon,
  fetchPokemonList,
  getPokemonList,
  getPokemonListFetchStatus,
  fetchPokemonListByRegisters
} from '../../redux/reducers/pokemonReducer'

const pokeTest = {
  name: 'Eevee',
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png',
  attack: 23,
  defense: 54,
  hp: 100,
  type: 'Test type',
  idAuthor: 1
}

const pokeTestU = {
  id: 269,
  name: 'Mew3',
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png',
  attack: 23,
  defense: 54,
  hp: 100,
  type: 'Test type',
  idAuthor: 1
}

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
      <button onClick={() => dispatch(createNewPokemon(pokeTest))}>Create Eevee</button>
      <button onClick={() => dispatch(deletePokemonById(pokeTestU))}>Delete Eevee</button>
      <button onClick={() => dispatch(updatePokemon(pokeTestU))}>Update Eevee</button>
      {pokemonListStatus === 'loading' && <div>Working on it...</div>}
    </div>
  )
}
