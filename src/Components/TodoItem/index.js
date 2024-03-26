import '../TodoItem/TodoItem.css'
import { CompleteIcon } from '../../Icons/CompleteIcon';
import { DeleteIcon } from '../../Icons/DeletIcon';


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