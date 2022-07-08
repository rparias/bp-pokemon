import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchPokemonList as fetchPokemonListAPI,
  fetchPokemonListByRegisters as fetchPokemonListByRegistersAPI,
  createNewPokemon as createNewPokemonAPI,
  deletePokemonById as deletePokemonByIdAPI,
  updatePokemon as updatePokemonAPI
} from '../../features/pokemon/pokemonAPI'

export const fetchPokemonList = createAsyncThunk('pokemon/fetchPokemonList', async () => {
  const response = await fetchPokemonListAPI()
  return response.data
})

export const fetchPokemonListByRegisters = createAsyncThunk(
  'pokemon/fetchPokemonListByRegisters',
  async (numberOfRegisters) => {
    const response = await fetchPokemonListByRegistersAPI(numberOfRegisters)
    return response.data
  }
)

export const createNewPokemon = createAsyncThunk('pokemon/createNewPokemon', async (pokemon) => {
  const response = await createNewPokemonAPI(pokemon)
  return response.data
})

export const deletePokemonById = createAsyncThunk('pokemon/deletePokemonById', async (pokemon) => {
  const response = await deletePokemonByIdAPI(pokemon)
  const { success } = response.data
  if (success) {
    response.data.pokemonRemoved = pokemon
  }
  return response.data
})

export const updatePokemon = createAsyncThunk('pokemon/updatePokemon', async (pokemon) => {
  const response = await updatePokemonAPI(pokemon)
  return response.data
})

const initialState = {
  list: [],
  currentPokemon: {},
  status: 'idle'
}

const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonList.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchPokemonList.fulfilled, (state, action) => {
      state.status = 'complete'
      state.list = action.payload
    })
    builder.addCase(fetchPokemonList.rejected, (state, action) => {
      state.status = 'rejected'
      state.list = []
    })
    builder.addCase(fetchPokemonListByRegisters.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchPokemonListByRegisters.fulfilled, (state, action) => {
      state.status = 'complete'
      state.list = action.payload
    })
    builder.addCase(fetchPokemonListByRegisters.rejected, (state, action) => {
      state.status = 'rejected'
      state.list = []
    })
    builder.addCase(createNewPokemon.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(createNewPokemon.fulfilled, (state, action) => {
      state.status = 'complete'
      state.currentPokemon = action.payload
      state.list = state.list.concat(action.payload)
    })
    builder.addCase(createNewPokemon.rejected, (state, action) => {
      state.status = 'rejected'
      state.currentPokemon = {}
    })
    builder.addCase(updatePokemon.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(updatePokemon.fulfilled, (state, action) => {
      state.status = 'complete'
      state.currentPokemon = action.payload
      const pokemonList = state.list
      state.list = pokemonList.map((pokemon) => {
        return pokemon.id === state.currentPokemon.id ? state.currentPokemon : pokemon
      })
    })
    builder.addCase(updatePokemon.rejected, (state, action) => {
      state.status = 'rejected'
      state.currentPokemon = {}
    })
    builder.addCase(deletePokemonById.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(deletePokemonById.fulfilled, (state, action) => {
      state.status = 'complete'
      const pokemonList = state.list
      state.list = pokemonList.filter((pokemon) => pokemon.id !== action.payload.pokemonRemoved.id)
    })
    builder.addCase(deletePokemonById.rejected, (state, action) => {
      state.status = 'rejected'
      state.currentPokemon = {}
    })
  }
})

export const getPokemonList = (state) => state.pokemon.list
export const getCurrentPokemon = (state) => state.pokemon.currentPokemon
export const getPokemonListFetchStatus = (state) => state.pokemon.status

export default pokemonListSlice.reducer
