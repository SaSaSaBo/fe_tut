import { memo } from 'react';

interface AddTodoProps {
    submitHandle: (event: React.FormEvent<HTMLFormElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todo: string; // veya başka bir uygun tür
}
  
function AddTodo({ submitHandle, onChange, todo }: AddTodoProps)  {
    console.log('AddTodo render');
    
    return (
        <form onSubmit={submitHandle}>
        <input 
          type="text" 
          value={todo} 
          onChange={onChange} 
          // onChange={e => setTodo(e.target.value)}
        />
        <button disabled={!todo} type='submit'>Add</button>
        </form>
    )
}

export default memo(AddTodo)