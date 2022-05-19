/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { PhoneDetailsType } from "../../types/PhoneDetailsType";

// Initial state for get the phone value if exists
const initialPhone = localStorage.getItem("phone")
  ? (JSON.parse(localStorage.getItem("phone") as any) as PhoneDetailsType)
  : ({
      number: null,
      type: null,
    } as PhoneDetailsType);

// Slice
const slice = createSlice({
  name: "phoneDetails",
  initialState: {
    phone: initialPhone,
  },
  reducers: {
    savePhoneSucess: (state, action) => {
      state.phone = action.payload;
      // Save the phone value in localStorage to persist the value after refresh the page
      localStorage.setItem("phone", JSON.stringify(action.payload));
    },
  },
});
export default slice.reducer;

// Actions
const { savePhoneSucess } = slice.actions;

/**
 * @description Save the phone value in the redux store
 * @param {PhoneDetailsType} phone
 */
export const savePhone = (phone: PhoneDetailsType) => async (dispatch: any) => {
  try {
    dispatch(savePhoneSucess(phone));
  } catch (e: any) {
    return console.error(e.message);
  }
};
