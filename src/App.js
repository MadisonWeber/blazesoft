import Nav from './components/Nav'
import Hero from './components/Hero'
import Message from './components/Message'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook'
import './css/App.css';
import { useSelector } from 'react-redux';
import { getShowMessage, getShowAdd, getEditBook } from "./store/bookSlice"


function App() {

  const currentMessage = useSelector(getShowMessage)
  const showAddBook = useSelector(getShowAdd)
  const currentEditBook = useSelector(getEditBook)

  return (
    <div className="App">
      <Nav />
      <Hero />
      {currentMessage.message && <Message /> }
      {showAddBook && <AddBook /> }
      {currentEditBook.name && <EditBook /> }
    </div>
  );
}

export default App;
