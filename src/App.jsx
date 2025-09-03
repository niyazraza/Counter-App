import React from 'react'
import './App.css'
import {useState}from 'react'
function App()
 {
    const [count,setCount]=useState(0)
    return(
        <>
        <div className='container'>
            <h1 className='header'>Counter App</h1>
        <h2>{count}</h2>
        <div className='bth-group'>   
     <button onClick={() => setCount(count+1)}>+</button>
     <button  onClick={() => setCount(count-1)}>-</button>
     <button  onClick={() => setCount(0)}>reset</button>
        </div>
          </div>
        </>
    )
    
}
export default App