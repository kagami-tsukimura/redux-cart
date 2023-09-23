import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deleteIsOpen: false,
  restoreIsOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openDeleteModal: (state) => {
      state.deleteIsOpen = true;
    },
    closeDeleteModal: (state) => {
      state.deleteIsOpen = false;
    },
    openRestoreModal: (state) => {
      state.restoreIsOpen = true;
    },
    closeRestoreModal: (state) => {
      state.restoreIsOpen = false;
    },
  },
});

export const {
  openDeleteModal,
  closeDeleteModal,
  openRestoreModal,
  closeRestoreModal,
} = modalSlice.actions;
export default modalSlice.reducer;
