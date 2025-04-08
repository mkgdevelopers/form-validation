import React, { useState } from 'react'
import {toast , ToastContainer} from 'react-toastify'

const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [users,setUsers] = useState([]);
  
  const formHandler = (e) =>{
    e.preventDefault();
    if(password.length < 8){
      setError('Password should be at-least 8 characters')
      return;
    }
    if(!/[!@#$%^&*()<>,.'";:]/.test(password)){
      setError("Password must contain any special character")
      return;
    }
    if(password != confirmPassword){
      setError("Password didn't match")
      return;
    }
    if(!/[A-z]/.test(password)){
      setError("Password must contain an uppercase letter")
      return;
    }

    setUsers([...users,{name,email,password}])
    setError('')
    setName('')
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    toast.success('Login Successful', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Flip,
      });
  }


  return (
    <>
    <div id='main'>
      <form onSubmit={(e)=>{
        formHandler(e)

      }}>
        <p>Create An Account</p>
        <input type='text' 
        placeholder='Enter your name'
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
        />

        <input 
        type='email' 
        placeholder='Enter your email'
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        />

        <input 
        type='password' 
        placeholder='Enter your password'
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        />

        <input 
        type='password' 
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={(e)=>{
          setConfirmPassword(e.target.value)
        }}
        />
        {error && (<p className='error'>{error}</p>)}
        <button>Sign Up</button>
      </form>
      <ToastContainer>

      </ToastContainer>

        
    </div>
    {users.map(function(elem,idx){
      return (<div id='{idx}'>{elem.name}</div>)
    })}
    </>
  )
}

export default App
