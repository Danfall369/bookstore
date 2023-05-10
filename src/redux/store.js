import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
}, composeWithDevTools());
