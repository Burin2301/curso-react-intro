import '../CreateTodoButton/CreateTodoButton.css'

function CreateTodoButton(){
    return(
        <button 
            className="create-todo-button"
            onClick={
                ()=>{
                    alert('clicaste mi pez')
                }
                } >
            +
        </button>
    )
}

export {CreateTodoButton}