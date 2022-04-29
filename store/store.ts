import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import modalReducer from '../features/modalSlice';
import userReducer from '../features/userSlice';

export function makeStore() {
  return configureStore({
    reducer: { user: userReducer, modal: modalReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
