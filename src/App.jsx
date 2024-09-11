import { useState } from 'react'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <Navbar/>
      <div className='container mx-auto my-5 rounded-xl p-5 bg-vilolet-100'>
        <div className='addTodo'>
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type='text' />
          <button >Add</button>
        </div>
      <h2 classname='text-lg font-bold '> Your Task </h2>
      <div className='todo'>
        <div className='todoItem'>
          

      </div>

      
   </>
  )
}

export default App;
