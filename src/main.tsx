import './index.css'

import { Provider, cacheExchange, createClient, fetchExchange } from 'urql';

import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'

const client = createClient({
  url: import.meta.env.VITE_API_URL || 'http://localhost:3001/graphql',
  exchanges: [cacheExchange, fetchExchange]
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
