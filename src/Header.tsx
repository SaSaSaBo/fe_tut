import  { memo } from 'react';
// using memo cause the render header only once

export default memo(function Header() {
    console.log('Header render');
    
    return (
        <header>HEADER</header>
    )
})
// one way using the memo

// export default memo(Header)
// second way using the memo