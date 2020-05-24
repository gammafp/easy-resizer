import { rootReducer as reducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';

export type AppState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore<AppState>({
    reducer,
});

export default store;
