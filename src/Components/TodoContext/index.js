import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = createContext()



function TodoProvider({children}){

    const [searchValue, setSearchValue] = useState('')
    const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1',[])
    const [openModal, setOpenModal] = useState(false)

    const completedTodos = todos.filter( todo => !!todo.completed).length
    const totalTodos = todos.length

    const searchedTodos = todos.filter( todo => {
    const todoText = todo.text.toLowerCase() 
    const searchedText = searchValue.toLowerCase()
    return todoText.includes(searchedText)
})

    const addTodo = (text) =>{
        if(!text){
            alert('Escribe algo')
        }else{
            const newTodos = [...todos]
            newTodos.push({
                text,
                completed:false,
            })
            saveTodos(newTodos);
        }
    }

    const handleCompleteButton = (index) =>{
    const newTodos = [...todos]
    newTodos[index].completed = true
    saveTodos(newTodos)
    }

    const handleDeleteButton = (index) =>{
    const newTodos = [...todos]
    newTodos.splice(index,1)
    saveTodos(newTodos)
    }

    return(
        <TodoContext.Provider 
            value={{
                completedTodos,
                totalTodos,
                searchValue,
                searchedTodos,
                setSearchValue,
                handleCompleteButton,
                handleDeleteButton,
                loading,
                error,
                openModal, 
                setOpenModal,
                addTodo
            }}>
                {children}
        </TodoContext.Provider>
    )
}


export { TodoContext,
    TodoProvider
}

