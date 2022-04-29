import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store/store';

export interface ModalState {
  modal: boolean;
}

const initialState: ModalState = {
  modal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    open: (state) => {
      state.modal = true;
    },

    close: (state) => {
      state.modal = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export const selectModal = (state: AppState) => state.modal.modal;

export default modalSlice.reducer;
