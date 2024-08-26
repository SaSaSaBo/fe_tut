import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import classNames from "classnames"

// function Button(props: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, variant?: 'success' | 'warning' | 'danger'; } ) { 
//     return (
//         <button className="p-4 h-10 flex items-center bg-green-500" onClick={() =>  alert('You push the button')} >{props.text}</button>
//     ) 
// }

interface ButtonProps {
    text?: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
    variant?: 'success' | 'warning' | 'danger' | 'default'; // opsiyonel 'variant' prop'u
    children?: ReactNode | null; // opsiyonel 'children' prop'u
  }

  function Button({ children, variant = 'default' }: ButtonProps){
    
    return (
        // <button className="p-4 h-10 flex items-center bg-green-500 rounded" onClick={() =>  alert('You push the button')} >{text}</button> // after adding classNames we change in here
        <button 
         className={ classNames({
            "p-4 h-10 flex items-center rounded" : true,
            "bg-gray-400 text-gray-800" : variant === 'default',
            "bg-green-400 text-green-800" : variant === 'success',
            "bg-yellow-200 text-yellow-800" : variant === 'warning',
            "bg-red-500 text-red-800" : variant === 'danger',
            })
         } onClick={() =>  alert('You push the button')} >
            {children}
        </button> // after adding classNames we change in here
    )
}

export default Button