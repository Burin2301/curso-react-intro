import '../Components/Styles/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue}){

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