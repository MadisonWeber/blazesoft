import React, { useState, useEffect } from 'react'
import "../css/editbook.css"
import { useSelector, useDispatch } from 'react-redux';
import { getEditBook, editBook, getBooks, replaceEditBook, addMessage } from "../store/bookSlice"


const EditBook = () => {


    const dispatch = useDispatch()
    const currentEditBook = useSelector(getEditBook)
    const currentBooks = useSelector(getBooks)

    const [ editName, setEditName ] = useState('')
    const [ editPrice, setEditPrice ] = useState('')
    const [ editCategory, setEditCategory ] = useState('')

    useEffect(()=> {
        setEditName(currentEditBook.name)
        setEditPrice(currentEditBook.price)
        setEditCategory(currentEditBook.category)
    }, [currentEditBook.category, currentEditBook.name, currentEditBook.price])


    const handleSubmit = (e) => {
        e.preventDefault()
        const replaceArr = currentBooks.map(book => {
            if(book.id === currentEditBook.id){
                return {
                    id : book.id,
                    name : editName, 
                    price : editPrice * 1,
                    category : editCategory
                }
            }
            return book
        })

        dispatch(replaceEditBook(replaceArr))
        dispatch(editBook({}))
        dispatch(addMessage({message : `Successful Edit`}))
        
    }
    
    const deleteEditBook = () =>{
        dispatch(editBook({}))
    }

    return (
        <div className = 'edit__book'>
            <div className="edit__container">

                <h3>Edit Book</h3>
                <form onSubmit = {(e)=> handleSubmit(e)} id = 'edit__form'>
                    <div>
                        <label htmlFor="edit_name">Name</label>
                        <input type="text" name = 'edit_name' id = 'edit_name' minLength = {2} autoComplete = 'off' value = {editName} onChange = {(e)=> setEditName(e.currentTarget.value)}/>
                    </div>
                    <div>
                        <label htmlFor="edit_price">Price</label>
                        <input type="number" min = {1} step={0.01} name = 'edit_price' id = 'edit_price' value = {editPrice} onChange = {(e)=> setEditPrice(e.currentTarget.value)}/>
                    </div>
                    <div>
                        <label htmlFor="edit_category">Category</label>
                        <input type="text" name = 'edit_category' id = 'edit_category' autoComplete = 'off' minLength = {2} value = {editCategory}onChange = {(e)=> setEditCategory(e.currentTarget.value)}/>
                    </div>
                </form>
                <i className = 'fas fa-times' onClick = {deleteEditBook}></i>
                <button type = 'submit' form = 'edit__form' className = 'add__edit__database'>Complete Edit</button>
            </div>
        </div>
    )
}

export default EditBook
