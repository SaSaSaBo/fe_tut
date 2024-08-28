/* eslint-disable react-hooks/exhaustive-deps */
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

// import React, { useState, useReducer, useCallback, useMemo } from 'react';
// import todoReducer from './reducer/todoReducer';
// import Header from './Header';
// import AddTodo from './AddTodo';
// import Todos from './Todos';

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

// function App() {

//   const [count, setCount] = useState(0);

//   const [state, dispatch] = useReducer(todoReducer, {
//     todos: [],
//     todo: '',
//     search: '',
//   }); 

//   const [todos, setTodos] = useState<string[]>([]);
//   const [todo, setTodo] = useState<string>('');
//   Because the const [state, dispatch] we don't use like that

//   const submitHandle = useCallback((e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch({
//       type: 'ADD_TODO',
//       todo: state.todo,
//       value: undefined
//     })
//     if (todo) {
//       setTodos([...todos, todo]);
//       setTodo(''); // Clear input after form submission
//     }
//   }, [state.todo])

//   const searchHendle = (e: { target: { value: any; }; }) => {
//     dispatch({
//       type: 'SET_SEARCH',
//       value: e.target.value,
//       todo: undefined
//     })
//   }
  
//   const filteredTodos = useMemo(() => {
//     return state.todos.filter((todo: string) => 
//       todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR'))
//     );
//   }, [state.todos, state.search]);
//   The component we were memoizing was changing because its location in memory was changing. To prevent this, we used the useMemo property to prevent it from rendering outside of the events we specified.  
  
//   state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')));


//   const onChange = useCallback((e: { target: { value: any; }; }) => {
//     setTodo(e.target.value);
//     dispatch({
//       type: 'SET_TODO',
//       value: e.target.value,
//       todo: undefined
//     })
//   }, [])

//   If we are passing a method as a prop in a component, we are using it to wrap that method. And it keeping in the memory

//   console.log('App render');
  
//   return (
//     <>
//     <Header />
//     <h3>{count}</h3>
//     <button onClick={() => setCount(count + 1)}>Increase</button>
//     <hr />
//       <h1>TodoApp</h1>
//       <input type="text" value={state.search} placeholder='Search Todo' onChange={searchHendle} />
//       <br />
//       <br />
//       {state.search}
//       <hr />
//     <AddTodo submitHandle={submitHandle} onChange={onChange} todo={state.todo} />
//       {/* we moved the form to AddTodo.tsx file */}
//       <Todos todos={filteredTodos} />
//       {/* we moved the ul to Todos.tsx file */}

//     </>
//   );
// }

// export default App;


// import React from 'react'
// import { useState, useMemo } from 'react'

// function App() {

//   const [name, setName] = useState('sasa')

//   const [description, setDescription] = useState('Your opinion is important!')

//   const [groups, setGroups] = useState("")
//   const group = ["StrayKids", "XdinaryHeroes", "TomorrowByTogether", "Enhypen", "XG", "Itzy", "G-Idle", "BabyMonster"]
//   const group = [
//     {key: '1', value: "StrayKids"},
//     {key: '2', value: "XdinaryHeroes"},
//     {key: '3', value: "TomorrowByTogether"},
//     {key: '4', value: "Enhypen"},
//     {key: '5', value: "XG"},
//     {key: '6', value: "Itzy"},
//     {key: '7', value: "G-Idle"},
//     {key: '8', value: "BabyMonster"},
//   ]
//   const selectedGroup = useMemo(() => {
//     return group.find(g => g.key === groups)?.value || ""; 
//   }, [groups]);
//   const selectedGroup = group[groups]

//   const [category, setCategory] = useState<number[]>([6, 8]);
//   const categories = [
//     {key: '1', value: "Music"},
//     {key: '2', value: "Games"},
//     {key: '3', value: "Movies"},
//     {key: '4', value: "Anime"},
//     {key: '5', value: "Books"},
//     {key: '6', value: "Comics"},
//     {key: '7', value: "Art"},
//     {key: '8', value: "Other"},
//   ]
  

//   return (
//     <>
//       <button onClick={() => setName('staaa')}>Change</button>
//       <input type="text" value={name} onChange={e => setName(e.target.value)}/>
//       <br />
//       {name}

//       <br />
//       <hr />

//       <textarea value={description} onChange={e => setDescription(e.target.value)} />
//       <br />
//       {description}

//       <br />
//       <hr />

//       <select value={groups} onChange={e => setGroups(e.target.value)}>
//         <option value="" >Choose</option>
//         {/* <option value="1" >StrayKids</option>
//         <option value="2" >XdinaryHeroes</option>
//         <option value="3" >TomorrowByTogether</option>
//         <option value="4" >Enhypen</option>      
//         <option value="5" >XG</option>
//         <option value="6" >Itzy</option>
//         <option value="7" >G-Idle</option>
//         <option value="8" >BabyMonster</option> */}
//         {group.map((group) => <option key={group.key} value={group.key}>{group.value}</option>)}
//       </select>
//       <br />
//       {selectedGroup}

//       <br />
//       <hr />

//       <select
//         value={category.map(String)}  // `number[]`'ı `string[]`'e dönüştürüyoruz
//         multiple={true}
//         onChange={e => {
//           const selectedOptions = Array.from(e.target.selectedOptions, option => Number(option.value));
//           setCategory(selectedOptions);
//         }}
//       >
      
//         <option value="">Choose</option>
//         {categories.map((category) => <option key={category.key} value={category.key}>{category.value}</option>)}
//       </select>

//     </>
//   )
// }

// export default App

import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {

  const [name, setName] = useState('sasa')

  const [description, setDescription] = useState('Your opinion is important!')

  const [group, setGroup] = useState('');
  // const groups = ["StrayKids", "XdinaryHeroes"]
  const groups = [
    {key: '1', value: "StrayKids"},
    {key: '2', value: "XdinaryHeroes"},
  ]
  // const selectGroup = group !== '' ? groups[Number(group)] : '';
  const selectGroup = groups.find(g => g.key === group);

  const [category, setCategory] = useState<string[]>(['1', '3']);   
  const categories = [
    {key: '1', value: "Vocal"},
    {key: '2', value: "Rap"},
    {key: '3', value: "Dance"},
    {key: '4', value: "Instrument"},
  ]
  const selectedCategories = category && categories.filter(c => category.includes(c.key))

  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState('');
  useEffect(() => {
    if(avatar) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', function() {
        return setImage(this.result);     
      })
      fileReader.readAsDataURL(avatar)
    }
  }, [avatar])

  const [rule, setRule] = useState(true)
  const [rules, setRules] = useState([
     {key: 1, value: "I accept the privacy policy.", checked: false},  
     {key: 2, value: "I accept the stated rules.", checked: false},  
     {key: 3, value: "I accept the condition rules.", checked: true},  
  ])
  const checkRule = (key: number, checked: boolean) => {
    setRules(
      rules => rules.map(
        rule => {
          if(rule.key === key) {
            return {...rule, checked: checked}
          }
          return rule
        }
      )
    )
  }
  const enabled = rules.every(rule => rule.checked) && avatar

  const [level, setLevel] = useState('beginner');
  const levels = [
    {key: 'beginner', value: 'Beginner'},
    {key: 'intermediate', value: 'Intermediate'},
    {key: 'advanced', value: 'Advanced'},
    {key: 'expert', value: 'Expert'},
    {key: 'master', value: 'Master'},
  ]
  const selectLevel = levels.find(l => l.key === level);

  const submitHandle = () => {
    const formData = new FormData()
    formData.append('avatar', avatar)
    formData.append('name', name)
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData
    })
  }


  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} /> 

      <br />
      <br />

      <button onClick={() => setName('staaa')}>Change Name</button>      

      <br />

      {name}

      <br />
      <hr />

      <textarea value={description} onChange={e => setDescription(e.target.value)}/>

      <br />

      {description}

      <br />
      <hr />

      <select value={group} onChange={e => setGroup(e.target.value)}>
        <option key="0" value="">Choose</option>
        {/* <option value="1">Skz</option>
        <option value="2">XH</option> */}
       {groups.map(group => ( <option key={group.key} value={group.key}>{group.value}</option> ))}
      </select>

      <br />

      <pre>{JSON.stringify(selectGroup, null, 2)}</pre>

      <br />
      <hr />

      {/* <select value={category} multiple={true} onChange={e => setCategory(Array.from(e.target.selectedOptions, option => option.value))}> */}
      <select value={category} multiple={true} onChange={e => setCategory([...e.target.selectedOptions].map(option => option.value))}>
        {categories.map(category => (<option key={category.key} value={category.key}>{category.value}</option>))}
      </select>
      
      <br />
      <br />

      <button onClick={() => setCategory(["2", "3", "4"])}>Choose A Categories</button>

      <br />

      <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>

      <br />
      <hr />

      <label>
          <input type="checkbox" checked={rule} onChange={e => setRule(e.target.checked)} />
          I agree with the conditions.
      </label>

      <br />
      <br />

      {
        rules.map(
          rule => (
            <label>
              <input type="checkbox" checked={rule.checked} onChange={e => checkRule(rule.key, e.target.checked)} />
              {rule.value}
            </label>  
          ))
      }

      <br />

      <pre>{JSON.stringify(rules, null, 2)}</pre>

      <br />

      <button disabled={!rule}>Continue For Conditions</button>

      <br />  
      <br />  

      <button onClick={submitHandle} disabled={!enabled}>Continue For Rules</button>

      <br />  
      <br />  

      <label>
        <input type="file" onChange={e => setAvatar(e.target.files[0])} />
      </label>

      <br />

      {
        avatar && (
          <>
            <h3>{avatar.name}</h3>
            <img src={image} alt="" />
          </>
        )
      }

      <br />
      <hr />

      {
        levels.map((l, index) => (
          <label key={index}>
            <input type="radio" value={l.key} checked={l.key === level} onChange={e => setLevel(e.target.value)} />
            {l.value}
          </label>
        ))
      }

      <br />

      <pre> {JSON.stringify(selectLevel, null, 2)}</pre>

      <br />
      <hr />

    </>
  )
}

export default App
