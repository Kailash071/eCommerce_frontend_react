import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from "./store"
import { Provider } from "react-redux"
import { productsApiSlice } from './reducers/productsSlice';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { categorysApiSlice } from './reducers/categorySlice';
import { adminUsersApiSlice } from './reducers/adminUsersSlice';
const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(productsApiSlice.endpoints.getProducts.initiate())
store.dispatch(categorysApiSlice.endpoints.getCategorys.initiate())
store.dispatch(adminUsersApiSlice.endpoints.getUsers.initiate())
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
         <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
