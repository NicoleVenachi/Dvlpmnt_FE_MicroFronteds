// react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// external libraries
import { Provider } from 'react-redux'

// own modules
import App from './App.tsx'
import { store } from './store/index.ts'

//styles
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </StrictMode>,
)

