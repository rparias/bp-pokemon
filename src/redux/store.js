import { combineReducers, configureStore } from '@reduxjs/toolkit'
import pokemonListReducer from './reducers/pokemonListSlice'

const rootReducer = combineReducers({
  pokemonList: pokemonListReducer
})

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
