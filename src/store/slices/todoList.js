import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  works: [],
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    add: (state, action) => {
      const title = action.payload;
      state.works.push({
        title,
        done: false,
        time: new Date().toLocaleString(),
      });
    },
    del: (state, action) => {
      const itemIndex = action.payload;
      state.works.splice(itemIndex, 1);
    },
    toggleDone: (state, action) => {
      const itemIndex = action.payload;
      state.works[itemIndex].done = !state.works[itemIndex].done;
    },
  },
});

export const { add, del, toggleDone } = todoListSlice.actions;

export default todoListSlice.reducer;
