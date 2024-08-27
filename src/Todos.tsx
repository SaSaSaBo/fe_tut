import TodoItem from './TodoItem'
import { memo } from 'react';

interface TodosProps {
    todos: string[]; // veya state'inizin uygun türü
}
  
function Todos({ todos }: TodosProps) {
    console.log('Todos render');
    
    return (
        <ul>
            {
                todos.map((todo: any, index: number) => <TodoItem todo={todo} key={index} />)
            }
        </ul>   
    )
}

export default memo(Todos)    