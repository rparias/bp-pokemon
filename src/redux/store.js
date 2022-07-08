import { combineReducers, configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './reducers/pokemonReducer'

const rootReducer = combineReducers({
  pokemon: pokemonReducer
})

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
