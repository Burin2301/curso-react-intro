import { TodoItem } from '../Components/TodoItem'
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodosError } from '../Components/TodosError';
import { TodosLoading } from '../Components/TodosLoading';
import { EmptyTodos } from '../Components/EmptyTodos';

function AppUI(
    {
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
        setSearchValue,
        handleCompleteButton,
        handleDeleteButton,
        loading,
        error
    }
){
    return(
        <>
            <TodoCounter
                completed={completedTodos}
                total={totalTodos} />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue} />

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
    )
}

export { AppUI }