import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textColor: "black",
  borderColor: 'cyan',
  bgColor: 'khaki',
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
    setBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
    
  },
});

export const { setTextColor, setBorderColor,setBgColor } = colorSlice.actions;

export default colorSlice.reducer;
