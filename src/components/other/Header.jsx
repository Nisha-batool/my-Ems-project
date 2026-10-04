import React from "react";

const Header = () => {
  return(
    <div className='flex items-center justify-between w-full p-4 bg-black text-white'>
      
    
      <div>
        
        <h1 className='text-xl font-semibold'>Hello<br/>Nisha 👋</h1>
      </div>

      
      <button className='bg-red-500 text-white px-3 py-2'>
        Log Out
      </button>

    </div>
  )
}
export default Header