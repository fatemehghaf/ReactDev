import { createSlice } from "@reduxjs/toolkit"; // اضافه کردن این خط

const initialState = {
  currentTheme: 'light',
  themes: {
    light: {
      textColor: 'navy',
      bgColor: 'white',
      borderColor: 'purple',
    },
    dark: {
      textColor: 'white',
      bgColor: 'gray',
      borderColor: 'white',
    },
    solarized: {
      textColor: 'purple',
      bgColor: 'khaki',
      borderColor: 'pink',
    },
  },
};

const themeSlice = createSlice({
  name: 'themebuttons',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
