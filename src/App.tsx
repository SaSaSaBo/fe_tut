// import './some.css';
// We use these css code for Tailwind.tsx code. And after the library that we add <sass> to our project we  are gonna use he style.scss.
import { createElement } from 'react';

import './style.scss';


interface ButtonProps {
  text: string; // 'text' adında bir string prop bekliyoruz
}

function Button(props: ButtonProps) {
  return <button>{props.text}</button>
}



function App() {
 
  // tsx style written list.
  const todos = ['Gunil', 'Jungsu', 'Gaon', 'O.de', 'Jun Han', 'Jooyeon'];

  const h1 = createElement('h1', null, 'sasaStaaaLlain.com');

  const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)));

  const button = createElement(Button, {
    text: 'XdinaryHeroes'}, null);

  return createElement('main', {
    className: 'test',
    id: 'main'
  }, h1, ul, button)

/* 
  //html style written list
    return (
    // After creating the Style.tsx we move div from there
    <>
      <Button text="XDINARYHEROES" />
      <h1>sasaStaaaLlain.com</h1>
      <ul>
        {
          todos.map(todo => 
            <li>
            {todo}
          </li>
        )}
      </ul>
    </>
  );
*/

  // return (
  //   // After creating the Style.tsx we move div from there
  //   <>

  //   </>
  // )
}

export default App;