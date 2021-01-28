import React from 'react'
import "../css/book.css"
import { useDispatch } from 'react-redux';
import { deleteBook, addMessage, editBook} from "../store/bookSlice";

const Book = ({book}) => {

    const dispatch = useDispatch()

    const handleDelete = (e, book) => {
        e.stopPropagation()
        dispatch(deleteBook(book.id))
        dispatch(addMessage({message : `Deleted ${book.name} from the database.`}))
    }

    const handleEdit = (book) => {
        dispatch(editBook(book))
    }

    return (
        <tr className = 'book' onClick = {() => handleEdit(book)}>   
            <td className = 'book__name'>{book.name}</td>
            <td>${book.price}</td>
            <td>{book.category}</td>
            <td className = 'hold__delete'><button className = 'deleteBook__btn' onClick = {(e)=>handleDelete(e, book)}>Delete</button></td>
        </tr>
    ) 
}

export default Book
