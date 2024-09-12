import { useState } from 'react'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-full'>
        <div className='addTodo'>
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type='text' />
          <button>Add</button>
        </div>
        <h2 className='text-lg font-bold'> Your Task </h2>
        <div className='todo'>
          <div className='todo flex'>
            <div className="text"> 
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus cupiditate a dolor enim, est aliquam! Praesentium quibusdam, cumque facere nostrum non laborum, aliquam eos sunt, repellendus quas vitae! Except
            </div>
            <div className="button">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
