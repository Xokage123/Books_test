import { combineReducers, createStore } from "redux";
import booksReducer from "../reducers/books"
import bookReducer from "../reducers/book"

const allReducers = combineReducers({
  booksReducer,
  bookReducer
})

export const store = createStore(allReducers);
// Interface
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch