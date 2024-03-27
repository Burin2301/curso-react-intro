import { useContext, useState } from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext'

function TodoForm(){

    const {setOpenModal, addTodo} = useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = useState('')

    const onChange = (e) =>{
        setNewTodoValue(e.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = (e)=>{
        e.preventDefault()
        setOpenModal(false)
    }

    return(
        <form
        className="form-todo-new"
        onSubmit={onSubmit}>
            <label>
                Escribe nuevo ToDo.
            </label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="Nueva tarea"/>  

            <div
            className='form-buttons'>
                <button 
                onClick={onCancel}
                className="TodoForm-button TodoForm-button-cancel">
                    Cancelar
                </button>

                <button 
                className="TodoForm-button TodoForm-button-add">
                    Agregar
                </button>
            </div>          

        </form>
    )
}

export { TodoForm }