import Book from '../components/Book'
import "../css/hero.css"   
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, toggleAddBook } from "../store/bookSlice"

const Hero = () => {

    const books = useSelector(getBooks)


    const dispatch = useDispatch()

    const handleClick = () => {
        
        dispatch(toggleAddBook(true))
       
    }

    return (
        <div className = 'hero'>
            <div className="book__display">
                {books.length === 0 ? <h3>No Books in the Database</h3> :<h3>Books Available</h3>}
                {books.length !== 0 && 
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
 
                    <tbody>
                        {
                        books.map(book => <Book  book = {book} key = {book.id} />)
                        }
                    </tbody>
                    
                </table>
                }
                <button className = {books.length === 0 ? `addBook__btn bottom` : 'addBook__btn'} onClick = {handleClick} ><i className="fas fa-plus"></i></button>
            </div>
            
        </div>
    )
}

export default Hero