import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import CreateTask from './components/other/CreateTask'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/Authprovider'


const App =()=>{

  const [user,setuser]=useState(null)
  

  const handleLogin= (email,password)=>{

    if(email == 'admin@me.com' && password == '123'){
    setuser('admin')
    
    }else if(email == 'user@me.com' && password == '123'){
      setuser('employees')
      

    }
    else{
      alert("Invalid credentials")
    }

  }

  
  

  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
    
    
  // },)
  return(
    
    <>
    
    {!user ?<Login handleLogin={handleLogin}/>:''}
    
    {user =='admin' ? <AdminDashboard/>:<EmployeeDashboard/>}
    </>
  )
}
export default App
