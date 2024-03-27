import { useContext } from 'react'
import '../CreateTodoButton/CreateTodoButton.css'
import { TodoContext } from '../TodoContext'

function CreateTodoButton(){

    const { openModal, setOpenModal } = useContext(TodoContext)

    return(
        <button 
            className="create-todo-button"
            onClick={ 
                ()=> setOpenModal(!openModal)
             } >
            +
        </button>
    )
}

export {CreateTodoButton}