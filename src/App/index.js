import { TodoProvider } from '../Components/TodoContext';
import { AppUI } from './AppUI';

function App() {


  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;



