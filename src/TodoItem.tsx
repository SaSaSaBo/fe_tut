import { memo } from 'react';

interface TodoItemProps {
    todo: string; // veya başka bir uygun tür
}
  
function TodoItems({ todo }: TodoItemProps) {
    console.log('TodoItem render', todo);
    
    return (
        <li>{todo}</li>
    )
}

export default memo(TodoItems)
// Thanks to the memo, the component will not rewrite each new todo when it is added. It will only write the last value.