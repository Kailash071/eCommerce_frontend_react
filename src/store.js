import { configureStore } from '@reduxjs/toolkit'
import indexRedux from './redux/indexRedux'


export const store = configureStore({
  reducer: {
   indexRedux
  },
})
console.log('state from store',store.getState())
