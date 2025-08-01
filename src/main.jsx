import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@ant-design/v5-patch-for-react-19';
import { Provider } from 'react-redux';
import store from './Redux/Store/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider 
      store={store}
    >
      <App />
    </Provider>
  </StrictMode>,
)
