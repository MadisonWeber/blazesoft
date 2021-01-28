import React from 'react'
import '../css/message.css'
import { useSelector, useDispatch } from 'react-redux';
import { getShowMessage, addMessage } from "../store/bookSlice"



const Message = () => {

    const dispatch = useDispatch()

    const currentMessage = useSelector(getShowMessage)

    const clearMessage = () => {
        dispatch(addMessage({}))
    }   

    return (
        <div className = 'message'>
            <p className = 'message__detail'>{currentMessage.message}</p>
            <i className = 'fas fa-times' onClick = {clearMessage}></i>
        </div>
    )
}

export default Message
