import {TodoItem} from './Components/TodoItem';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { CreateTodoButton } from './Components/CreateTodoButton';
import { useState } from 'react';





function App() {

  const defaultTodos = [
    {text:'Cortar cebolla',completed:true},
    {text:'Comer arroz',completed:false},
    {text:'Tomar awita',completed:false},
    {text:'learn react',completed:true},
    {text:'Tell youssi shes cool xD',completed:true}
  ]

  const [searchValue, setSearchValue] = useState('')
  const [todos, setToDos] = useState(defaultTodos)

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
    setToDos(newTodos)
    console.log(newTodos);
  }

  const handleDeleteButton = (index) =>{
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setToDos(newTodos)
    console.log(newTodos);
  }
  
  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos} />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((item, index)=>(
          <TodoItem
            key={index}
            text={item.text}
            completed={item.completed}
            onDelete={()=> handleDeleteButton(index)}
            onComplete={()=> handleCompleteButton(index)} 
            />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>    
  );
}

export default App;
