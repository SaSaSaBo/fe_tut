/* eslint-disable @typescript-eslint/no-unused-vars */
import logo from './logo.svg';
import './App.css';
// In these css code work in global scope
import Test from './Test';
import styles from './App.module.css';
import { Title } from './Components';
import Bootstrap from './Bootstrap';

// import './some.css';
// We use these css code for Tailwind.tsx code. And after the library that we add <sass> to our project we  are gonna use he style.scss.
import './style.scss';

import Tailwind from './Tailwind';
import { useEffect } from 'react';

function Style() {
    
  useEffect(() => {
    // console.log(styles); 
    // // This is an object now    
    if(process.env.NODE_ENV === 'production') {
      // inform the analyst
    }
  }, [])
    
 return (
    <div className={styles.App}> 
    {/* components base css */}

      <Title>{process.env.NODE_ENV}</Title>
      {/* It gave unique className <h1 class="sc-braxZu kVnoie">development</h1> */}
      <Title theme='dark'>{process.env.NODE_ENV}</Title>

      <p className='env'>
      {process.env.REACT_APP_API_URL} 
      {/* When we start with yarn/npm start it comes in .env.development and when we build it comes in .env.production */}
      <span>Test</span>
      </p>

      {process.env.NODE_ENV === 'production' && (
        <>
          <img src="/logo192.png" alt=''/> 
          {/*In console: <img src="logo192.png" alt="">. We directly use the path */}
          <img src={logo} alt="" /> 
          {/*In console: <img src="/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg" alt="">. Cause it's coming with a import path */}          
        </>
      )}

      <Test />

      <Bootstrap />

      <hr />

      <Tailwind />
      {/* After adding this start again for saved versions */}

    </div>
 )
}

export default Style