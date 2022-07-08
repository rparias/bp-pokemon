export const fetchPokemonList = async () => {
  return fetchPokemonData('https://bp-pokemons.herokuapp.com/?idAuthor=1')
}

export const fetchPokemonListByRegisters = async (numberOfRegisters) => {
  return fetchPokemonData(`https://bp-pokemons.herokuapp.com/${numberOfRegisters}?idAuthor=1`)
}

export const createNewPokemon = async (pokemon) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pokemon)
  }
  return fetchPokemonData('https://bp-pokemons.herokuapp.com/?idAuthor=1', requestOptions)
}

export const deletePokemonById = async (pokemon) => {
  const requestOptions = {
    method: 'DELETE'
  }
  return fetchPokemonData(`https://bp-pokemons.herokuapp.com/${pokemon.id}`, requestOptions)
}

export const updatePokemon = async (pokemon) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pokemon)
  }
  return fetchPokemonData(`https://bp-pokemons.herokuapp.com/${pokemon.id}`, requestOptions)
}

const fetchPokemonData = async (url, options) => {
  try {
    const res = await fetch(url, options)
    if (!res.ok) {
      const message = 'An error has occured'
      throw new Error(message)
    }
    const data = await res.json()
    const result = {
      data: data
    }
    return result
  } catch (err) {
    return Promise.reject(err)
  }
}
