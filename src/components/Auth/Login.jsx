import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  

    const [email ,setEmail] = useState("")

    const[password ,setpassword]= useState("")
    const submitHandler =(e)=> {
        e.preventDefault()
        handleLogin(email,password)
        console.log("email is",email)
        console.log("pasword is ",password)
        setEmail("")
        setpassword("")

    }
  return(
    <div className='flex h-screen w-screen items-center justify-center bg-black'>
      <div className='border-2 border-red-500 p-20 rounded-md bg-black'>
        <form onSubmit={(e)=>{
            submitHandler(e)

        }} className='flex flex-col items-center justify-center gap-4'>
          <input 
          value={email}
             onChange={(e)=>{
                setEmail(e.target.value)
                
             }}required type='email' 
            placeholder='Enter your email' 
            className='px-4 py-2 bg-black text-white border-2 border-teal-400 rounded-full w-72 focus:outline-none' 
          />
          <input 
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
            required type='password' 
            placeholder='Enter password' 
            className='px-4 py-2 bg-black text-white border-2 border-teal-400 rounded-full w-72 focus:outline-none' 
          />
          <button 
            className='mt-5 bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-full font-semibold border-2 border-teal-300'
>

          
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
