import React from 'react'
import PropTypes from 'prop-types'
import { setupStore } from '../redux/store'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

export function renderWithProviders(
  ui,
  { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  Wrapper.propTypes = {
    children: PropTypes.element.isRequired
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
