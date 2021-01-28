import { createSlice } from '@reduxjs/toolkit';
import fakeBooks from '../utils/fakeBooks'

const initialState = { books : fakeBooks, message : {}, showAddBook : false, editBook : {}}

const bookSlice = createSlice({
    name : 'book',
    initialState, 
    reducers : {
        addBook : (state, action) => {
            return {...state, books : [ action.payload , ...state.books]}
        },

        deleteBook: (state, action) => {
            return { ...state, books : state.books.filter(book => book.id !== action.payload)}
        },

        addMessage : (state, action) => {
            return { ...state, message : action.payload}
        },

        toggleAddBook: (state, action) => {
            return {...state, showAddBook : action.payload}
        },

        editBook : (state, action) => {
            return { ...state, editBook : action.payload}
        },

        replaceEditBook : (state, action) => {
            return {...state, books : action.payload}
        }

    }
})

export const { addBook, addMessage, deleteBook, toggleAddBook, editBook, replaceEditBook } = bookSlice.actions

export const getBooks = (state) => state.bookreducer.books

export const getEditBook = (state) => state.bookreducer.editBook

export const getShowMessage = (state) => state.bookreducer.message

export const getShowAdd = (state) => state.bookreducer.showAddBook

export default bookSlice.reducer