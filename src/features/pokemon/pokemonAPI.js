export const fetchPokemonList = async () => {
  try {
    const res = await fetch('https://bp-pokemons.herokuapp.com/?idAuthor=1')
    if (!res.ok) {
      const message = 'An error has occured'
      throw new Error(message)
    }
    const data = await res.json()
    console.log(data)
    const result = {
      data: data
    }
    return result
  } catch (err) {
    return Promise.reject(err)
  }
}

export const fetchPokemonListByRegisters = async (numberOfRegisters) => {
  console.log(numberOfRegisters)
  try {
    const res = await fetch(`https://bp-pokemons.herokuapp.com/${numberOfRegisters}?idAuthor=1`)
    if (!res.ok) {
      const message = 'An error has occured'
      throw new Error(message)
    }
    const data = await res.json()
    console.log(data)
    const result = {
      data: data
    }
    return result
  } catch (err) {
    return Promise.reject(err)
  }
}
