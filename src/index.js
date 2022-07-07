import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { setupStore } from './redux/store'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
const store = setupStore()

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
