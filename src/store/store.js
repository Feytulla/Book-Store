import { configureStore } from "@reduxjs/toolkit";
import allBook from './allBook'
import book from "./book";
import searchBook from "./searchBook";
import cartBooks from "./cartBooks";

export const store = configureStore({
    reducer: {
        allBook,
        book,
        search: searchBook,
        cartBooks,
    },
})