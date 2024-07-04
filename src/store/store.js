import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./slices/todoList";

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
