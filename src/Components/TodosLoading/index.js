import './TodosLoading.css'

function TodosLoading(){
    return(
        <>  
            <div className="loadingTodo-container">
                <span className='loadingTodo-completeIcon'>
                </span>
                <p className="loadingTodo-text"></p>
                <span className="loadingTodo-DeleteIcon">
                </span>
            </div>
        </>
    )
}
export { TodosLoading }