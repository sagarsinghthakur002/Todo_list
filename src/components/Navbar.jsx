import React from 'react'

const Navbar = () => {
  return (
    <nva className='felx justify-between bg-slate'>
      <div className='logo'>
        <span className='font-blod text-xl mx-8'> 
          my tastk 
        </span>
      </div>
        
        <ul className='flex gap-9 '>
        <li className='cursor-pointer hover:font-bold'>Home</li>
        <li className='cursor-pointer hover:font-bold'>your Task</li>          
        </ul>
    </nav>
    
      
   
  )
}

export default Navbar
