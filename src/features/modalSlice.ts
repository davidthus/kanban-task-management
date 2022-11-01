import { createSlice } from "@reduxjs/toolkit";

interface initialStateShape {
  modalType: string;
  modalDetail: {
    title: string;
    status: string;
    board: string;
    index?: number;
  };
  modalIsOpen: boolean;
}

const initialState: initialStateShape = {
  modalType: "",
  modalDetail: {
    title: "",
    status: "",
    board: "",
  },
  modalIsOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { modalDetail, modalType } = action.payload;
      return {
        modalDetail,
        modalType,
        modalIsOpen: true,
      };
    },

    closeModal: (state) => {
      return {
        modalDetail: { title: "", status: "", board: "" },
        modalIsOpen: false,
        modalType: "",
      };
    },

    changeModalsDetail: (state, action) => {
      return {
        ...state,
        modalDetail: {
          ...action.payload,
        },
      };
    },
  },
});

export const { openModal, closeModal, changeModalsDetail } = modalSlice.actions;
export default modalSlice.reducer;
