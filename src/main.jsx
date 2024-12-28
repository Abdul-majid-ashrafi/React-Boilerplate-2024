import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import './index.css'
import App from './App.jsx'
import jobReducer from './store/job-slice.js'

const store = configureStore({
  reducer: { jobs: jobReducer }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
