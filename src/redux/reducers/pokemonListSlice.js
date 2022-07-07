import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchPokemonList as fetchPokemonListAPI,
  fetchPokemonListByRegisters as fetchPokemonListByRegistersAPI
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

const initialState = {
  list: [],
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
  }
})

export const getPokemonList = (state) => state.pokemonList.list
export const getPokemonListFetchStatus = (state) => state.pokemonList.status

export default pokemonListSlice.reducer
