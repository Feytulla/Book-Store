import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchsearch = createAsyncThunk(
    'searchBook/fetchsearch',
    async (keyword, { rejectWithValue }) => {
        try {

            const response = await axios.get(`https://api.itbook.store/1.0/search/${keyword}`);

            if (!response.status) {
                throw new Error('Server Erro!');
            }

            const data = await response.data;

            return data.books.slice(0, 5)

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const searchBook = createSlice({
    name: 'searchBook',
    initialState: {
        books: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchsearch.pending]: (state) => {
            state.status = 'loading'
            state.error = null
            state.books = []
        },
        [fetchsearch.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.books.push(action.payload)
        },
        [fetchsearch.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
})

export default searchBook.reducer