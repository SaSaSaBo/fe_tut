/* eslint-disable no-sequences */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import './some.css';
// // We use these css code for Tailwind.tsx code. And after the library that we add <sass> to our project we  are gonna use he style.scss.
// import { createElement, useState } from 'react';

// // import './style.scss'; // instead of using this we're gonna use some.css Cause we're gonna made Button component.

// import Button from './components/Button';
// import Tab from './components/Tab';

// /*
// interface ButtonProps {
//   text: string; // 'text' adında bir string prop bekliyoruz
// }

// function Button(props: ButtonProps) {
//   return <button>{props.text}</button>
// }
// */


// function App() {

//   const [activeTab, setActiveTab] = useState(1);

//   const todos = ['Gunil', 'Jungsu', 'Gaon', 'O.de', 'Jun Han', 'Jooyeon'];
  

//   const searchFunction = () => {
//     alert('Searching...');
//   }
// /*  
//   // tsx style written list.

//   const h1 = createElement('h1', null, 'sasaStaaaLlain.com');

//   const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)));

//   const button = createElement(Button, {
//     text: 'XdinaryHeroes'}, null);

//   return createElement('main', {
//     className: 'test',
//     id: 'main'
//   }, h1, ul, button)


//   //html style written list
//     return (
//     // After creating the Style.tsx we move div from there
//     <>
//       <Button text="XDINARYHEROES" />
//       <h1>sasaStaaaLlain.com</h1>
//       <ul>
//         {
//           todos.map(todo => 
//             <li>
//             {todo}
//           </li>
//         )}
//       </ul>
//     </>
//   );
// */

//   return (
//     // After creating the Style.tsx we move div from there
//     <>

//       <div style={{padding: '20px'}}>

//         <button onClick={() => setActiveTab(2)}>Change activeTab</button>

//         <Tab activeTab={activeTab} setActiveTab={setActiveTab}> 
//           <Tab.Panel title="skz">StrayKids</Tab.Panel>
//           <Tab.Panel title="xh">XdinaryHeroes</Tab.Panel>
//           <Tab.Panel title="xg">XdinaryGirls</Tab.Panel>
//         </Tab>
//       </div>

//       <div style={{padding: '20px'}}>

//         {/* <Button text="XDINARYHEROES" /> */}
//         <Button> XDINARYHEROES&STRAYKIDS1 </Button> 
//         {/* when its like that the text called 'children' */}
//         <br />
//         <Button variant="success">XDINARYHEROES&STRAYKIDS2</Button>
//         <br />
//         <Button  variant="warning">XDINARYHEROES&STRAYKIDS3</Button>
//         <br />
//         <Button  variant="danger">XDINARYHEROES&STRAYKIDS4</Button>
      
//       </div>

//       <h1 style={{color: 'white', background: 'red'}}>sasaStaaaLlain.com</h1>

//       <br />

//       <label htmlFor="search" onClick={searchFunction}>Search</label>
//       <input type="text" id="search" style={{background: 'grey'}} />

//       <ul>
//         {
//           todos.map(todo => 
//             <li>
//             {todo}
//           </li>
//         )}
//       </ul>

//     </>
//   )
// }

// export default App;

// import Test from './Test';
// import React, { useState } from 'react'

// function App() {

//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <button onClick={() => setShow(show => !show)}>{ show ? 'Hide' : 'Show' }</button>
//       { show && <Test /> }
//     </>
//   )
// }

// export default App

// import * as React from 'react';
// import { forwardRef, useRef } from 'react';

// const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
//   return <input ref={ref} type='text' {...props} />
// })

// // Input = forwardRef(Input)

// function App() {

//   const inputRef = useRef<HTMLInputElement | null>(null);;

//   const focusInput = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }

//   return (
//     <>
//       <h1>useRef() - forwardRef()</h1>
//       <Input title="test" ref={inputRef}/>
//       <button onClick={focusInput}>Focus On</button>
//     </>
//   )
// }

// export default App

import React, { useState, useReducer, useCallback, useMemo } from 'react';
import todoReducer from './reducer/todoReducer';
import Header from './Header';
import AddTodo from './AddTodo';
import Todos from './Todos';

// function reducer(state: any, action: {
//   todo: any; type: any; value: any; 
// }) {
//   switch (action.type) {
//     case 'SET_TODO':
//       return {
//         ...state,
//         todo: action.value
//       }
//     case 'ADD_TODO':
//       return {
//         ...state,
//         todo: '',
//         todos: [
//           ...state.todos,
//           action.todo
//         ]
//       }
//   }
// }

function App() {

  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: '',
    search: '',
  }); 

  // const [todos, setTodos] = useState<string[]>([]);
  // const [todo, setTodo] = useState<string>('');
  // Because the const [state, dispatch] we don't use like that

  const submitHandle = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      todo: state.todo,
      value: undefined
    })
    // if (todo) {
    //   setTodos([...todos, todo]);
    //   setTodo(''); // Clear input after form submission
    // }
  }, [state.todo])

  const searchHendle = (e: { target: { value: any; }; }) => {
    dispatch({
      type: 'SET_SEARCH',
      value: e.target.value,
      todo: undefined
    })
  }
  
  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo: string) => 
      todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR'))
    );
  }, [state.todos, state.search]);
  // The component we were memoizing was changing because its location in memory was changing. To prevent this, we used the useMemo property to prevent it from rendering outside of the events we specified.  
  
  // state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')));


  const onChange = useCallback((e: { target: { value: any; }; }) => {
    // setTodo(e.target.value);
    dispatch({
      type: 'SET_TODO',
      value: e.target.value,
      todo: undefined
    })
  }, [])

  // If we are passing a method as a prop in a component, we are using it to wrap that method. And it keeping in the memory

  console.log('App render');
  
  return (
    <>
    <Header />
    <h3>{count}</h3>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <hr />
      <h1>TodoApp</h1>
      <input type="text" value={state.search} placeholder='Search Todo' onChange={searchHendle} />
      <br />
      <br />
      {state.search}
      <hr />
    <AddTodo submitHandle={submitHandle} onChange={onChange} todo={state.todo} />
      {/* we moved the form to AddTodo.tsx file */}
      <Todos todos={filteredTodos} />
      {/* we moved the ul to Todos.tsx file */}

    </>
  );
}

export default App;


