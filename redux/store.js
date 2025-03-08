import { configureStore } from '@reduxjs/toolkit'; // REDUX TOOLKIT PERMITE CRIAR A STORE JA CONFIGURADA
import counterReducer from './counterSlice'; // RELACIONA AO CONTADOR

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;