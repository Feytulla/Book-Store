import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetcBook = createAsyncThunk(
    'allBook/fetcBook',
    async (_,{rejectWithValue}) => {
        try{
            const response = await axios.get('https://api.itbook.store/1.0/new');
            if(!response.status) {
                throw new Error('Server Erro!');
            }
            const data = await response.data.books;
            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const allBook = createSlice({
    name: 'allBook',
    initialState: {
        allBooks: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [fetcBook.pending]: (state) => {
            state.status = 'loading'
            state.error = null

        },
        [fetcBook.fulfilled]: (state,action) => {
            state.status = 'resolved';
            state.allBooks.push(action.payload)
        },
        [fetcBook.rejected]: (state,action) => {
            state.error = action.payload
        }
    }
})

export default allBook.reducer