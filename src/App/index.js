import { useState } from 'react';
import { useLocalStorage} from './useLocalStorage'
import { AppUI } from './AppUI';

function App() {

  const [searchValue, setSearchValue] = useState('')
  const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1',[])

  const completedTodos = todos.filter( todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter( todo => {
    const todoText = todo.text.toLowerCase()
    const searchedText = searchValue.toLowerCase()
    return todoText.includes(searchedText)
  })

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
  
  return (
      <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      handleCompleteButton={handleCompleteButton}
      handleDeleteButton={handleDeleteButton}  
      loading={loading}
      error={error}
      
      />
  );
}

export default App;
