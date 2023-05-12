import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AfVl9Vr215PD59FDdYnx/books';

export const getBooks = createAsyncThunk('books/getBooks', () => fetch(url)
  .then((resp) => resp.json())
  .catch(() => (
    <div className="error">
      <h1>Error</h1>
    </div>
  )));

export const postBooks = createAsyncThunk('books/postBooks', async (Data) => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: Data,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const removeBook = createAsyncThunk('book/deleteBook', async (book) => {
  try {
    const response = await axios.delete(`${url}/${book.key}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const initialState = {
  books: [],
  isLoading: false,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default booksSlice.reducer;
