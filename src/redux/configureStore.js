import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { playlistReducers } from './reducers/playlistReducers';

const reducers = combineReducers({ playlist: playlistReducers });
const store = configureStore({ reducer: reducers });

export default store;
