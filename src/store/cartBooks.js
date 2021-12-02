import { createSlice } from "@reduxjs/toolkit";

export const cartBooks = createSlice({
    name: 'cartBooks',
    initialState: {
        allBooks: [],
    },
    reducers: {
        addCartBook: (state, action) => {
            state.allBooks.push(action.payload)
        },
        clearCartBook: (state) => {
            state.allBooks = []
        },
        addCount: (state, action) => {
            const count = state.allBooks.find(book => book.isbn13 === action.payload.isbn);
            count.count = action.payload.bookValue
        },
        removeBook: (state, action) => {
            state.allBooks.splice(action.payload, 1)
        },
    },
})

export const { removeBook, clearCartBook, addCount, addCartBook } = cartBooks.actions

export default cartBooks.reducer