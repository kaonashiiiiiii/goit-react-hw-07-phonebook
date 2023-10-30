import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store
