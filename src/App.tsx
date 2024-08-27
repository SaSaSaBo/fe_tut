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


import * as React from 'react';
import { forwardRef, useRef } from 'react';

const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return <input ref={ref} type='text' {...props} />
})

// Input = forwardRef(Input)

function App() {

  const inputRef = useRef<HTMLInputElement | null>(null);;

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <h1>useRef() - forwardRef()</h1>
      <Input title="test" ref={inputRef}/>
      <button onClick={focusInput}>Focus On</button>
    </>
  )
}

export default App
