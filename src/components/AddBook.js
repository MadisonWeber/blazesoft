import React, { useState }  from 'react'
import "../css/addbook.css"
import { useDispatch } from 'react-redux';
import { addBook, addMessage, toggleAddBook } from "../store/bookSlice"
import { v4 as createId } from 'uuid';


const AddBook = () => {

    const initialState = { name : '', price : 0, category : ''}
    const [ formState, setFormState ] = useState(initialState);
    const { name, price, category } = formState

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.currentTarget
        setFormState({ ...formState ,[name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        dispatch(addBook({name : name, price : price * 1, category: category, id : createId()}))
        dispatch(toggleAddBook(false))
        dispatch(addMessage({message : `${name} added to the database`}))

    }

    const handleClose = () => {
        dispatch(toggleAddBook(false))
    }

    return (
        <div className = 'addBook'>
            <h3 className= 'form__title'>Add A Book to the Database</h3>
            <form onSubmit = {handleSubmit} id = 'add__form'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name = 'name' id = 'name' minLength = {2} autoComplete = 'off' value = {name} onChange = {(e)=> handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" min = {1} step={0.01} name = 'price' id = 'price' value = {price} onChange = {(e)=> handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <input type="text" name = 'category' id = 'category' autoComplete = 'off' minLength = {2} value = {category} onChange = {(e)=> handleChange(e)}/>
                </div>

            </form>
                <button type = 'submit' form = 'add__form' className = 'add__to__database'>Add to Database</button>
            <i className = 'fas fa-times add' onClick = {handleClose}></i>
        </div>
    )
}

export default AddBook
