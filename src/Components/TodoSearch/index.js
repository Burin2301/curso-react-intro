import { useContext } from 'react'
import '../TodoSearch/TodoSearch.css'
import { TodoContext } from '../TodoContext'

function TodoSearch(){
     const { searchValue, setSearchValue} = useContext(TodoContext)
    return(
        <div className='input-div'>
            <input 
            placeholder="Type to search"
            value={searchValue}
            onChange={(e)=>{
                setSearchValue(e.target.value)
            }}/>
        </div>
        
    )
}

export {TodoSearch}