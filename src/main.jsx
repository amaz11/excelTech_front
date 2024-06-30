import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import AuthUser from './contextApi/AuthContext.jsx'
import { SocketProvider } from './contextApi/SocketApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthUser>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AuthUser>
    </Provider>
  </React.StrictMode>,
)
