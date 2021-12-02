import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetbook = createAsyncThunk(
    'book/fetbook',
    async (id, { rejectWithValue }) => {
        try {

            const response = await axios.get(`https://api.itbook.store/1.0/books/${id}`);

            if (!response.status) {
                throw new Error('Server Erro!');
            }
            const data = await response.data;

            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const book = createSlice({
    name: 'book',
    initialState: {
        book: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [fetbook.pending]: (state) => {
            state.status = 'loading'
            state.error = null
            state.book = []
        },
        [fetbook.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.book.push(action.payload)
        },
        [fetbook.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
})

export default book.reducer