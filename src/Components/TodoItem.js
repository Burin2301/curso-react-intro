import '../Components/Styles/TodoItem.css'
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeletIcon';


function TodoItem({index, text, completed, onDelete, onComplete}){
    return(
      <li key={index}>
        <CompleteIcon
        stroke={completed===true ?'rgb(14, 185, 8)':'red'}
        onClick={onComplete} />

         <p>{text}</p>
         <DeleteIcon
         onClick={onDelete} />
        
      </li>
    );
}

export {TodoItem}