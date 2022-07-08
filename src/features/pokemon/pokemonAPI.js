export const fetchPokemonList = async () => {
  return fetchPokemonData('https://bp-pokemons.herokuapp.com/?idAuthor=1')
}

export const fetchPokemonListByRegisters = async (numberOfRegisters) => {
  return fetchPokemonData(`https://bp-pokemons.herokuapp.com/${numberOfRegisters}?idAuthor=1`)
}

const fetchPokemonData = async (url) => {
  try {
    const res = await fetch(url)
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
