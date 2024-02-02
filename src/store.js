import { configureStore } from '@reduxjs/toolkit'
import groupReducer  from './groupSlice'

const localData = JSON.parse(localStorage.getItem('notes'))
const data = localData   
const initialState = data  || {
  notes: {
    groups: {},
    colors: {},
  },
};

export const store = configureStore({
  reducer: {
    notes: groupReducer,
  },
 preloadedState : initialState,
});

store.subscribe(() => {
  const state = store.getState();
  console.log(JSON.stringify(state.notes))
  localStorage.setItem('notes', JSON.stringify(state));
});

export default store;

