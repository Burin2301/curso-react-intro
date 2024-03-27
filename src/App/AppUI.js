import { TodoItem } from '../Components/TodoItem'
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodosError } from '../Components/TodosError';
import { TodosLoading } from '../Components/TodosLoading';
import { EmptyTodos } from '../Components/EmptyTodos';
import { TodoContext } from '../Components/TodoContext';
import { useContext } from 'react';
import { Modal } from '../Components/Modal';
import { TodoForm } from '../Components/TodoForm';

function AppUI(){

    const {
        searchedTodos,                    
        handleCompleteButton,
        handleDeleteButton,
        loading,
        error,
        openModal
    } = useContext(TodoContext)

    return(
        <>
            <TodoCounter
                // completed={completedTodos}
                // total={totalTodos}
                 />

            <TodoSearch
                // searchValue={searchValue}
                // setSearchValue={setSearchValue} 
                />
                <TodoList>
                    {loading && (
                        <>
                            <TodosLoading />
                            <TodosLoading />
                            <TodosLoading />
                        </>
                    ) }
                    {error && <TodosError />}

                    {
                        (!loading && searchedTodos.length === 0) && <EmptyTodos />
                    }

                    {searchedTodos.map((item, index)=>(
                        <TodoItem
                        text={item.text}
                        key={index}
                        onDelete={()=> handleDeleteButton(index)}
                        onComplete={()=> handleCompleteButton(index)} 
                        completed={item.completed} />
                        ))}
                    </TodoList>

            <CreateTodoButton />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    )
}

export { AppUI }