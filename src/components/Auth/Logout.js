import React, { useContext,useEffect } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
   //sessionStorage.removeItem("onSumbit")
 
   const navigate = useNavigate();
   const [auth,setAuth] = useContext(AuthContext)
  useEffect(()=>{
    setAuth({id:null, name:""})
    navigate('/')
  },[])
   

   return (
    <div>Logout</div>
  )

  }
export default Logout