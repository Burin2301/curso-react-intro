import { useState, useEffect } from "react"


function useLocalStorage(itemName, initialValue){

  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{  
    
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName)
  
        let parsedItem
  
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        }else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        setLoading(false)
      } catch{
        setError(true)
        setLoading(false)
        return error
      }
    }, 1500);
    
  }, [])

  
    
  
  const saveItem = (newItem) =>{
    setItem(newItem)
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem))
  }
  
  return{
    item,
    saveItem,
    loading,
    error
  }
  
}


export { useLocalStorage }



// const defaultTodos = [
//   {text:'Cortar cebolla',completed:true},
//   {text:'Comer arroz',completed:false},
//   {text:'Tomar awita',completed:false},
//   {text:'learn react',completed:true},
//   {text:'Tell youssi shes cool xD',completed:true}
// ]