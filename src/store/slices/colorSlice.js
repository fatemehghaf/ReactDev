import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textColor: "#000000",
  borderColor: 'cyan',
};

const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setTextColor: (state, action) => {
      state.textColor = action.payload;
    },
    setBorderColor: (state, action) => {
      state.borderColor = action.payload;
    },
  },
});

export const { setTextColor, setBorderColor } = colorSlice.actions;

export default colorSlice.reducer;
