import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault();

    setUserData({
      fullName:{
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    })

    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  }

  return (
    <div className=' p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className=' w-16 mb-10 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=''/>
    <form onSubmit={(e) => {
      submitHandler(e);
    }}>

      <h3 className=' text-lg font-medium mb-2'>Enter your name</h3>
      <div className=' flex gap-4 mb-6'>
      <input
       
       value={firstname}
       onChange={(e) => {
         setFirstname(e.target.value);
       }}
       required
       className=' bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base'
       type='text' 
       placeholder='Firstname' 
       />
       <input
       required
       value={lastname}
       onChange={(e) => {
         setLastname(e.target.value);
       }}
       className=' bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:base'
       type='text' 
       placeholder='Lastname' 
       />
      </div>


      <h3 className=' text-lg font-medium mb-2'>Enter your email?</h3>
      <input
       required
       value={email}
       onChange={(e) => {
         setEmail(e.target.value);
       }}
       className=' bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
       type='email' 
       placeholder='email@example.com' 
       />

      <h3 className=' text-lg font-medium mb-2'>Enter Password</h3>

      <input 
      required
      value={password}
       onChange={(e) => {
         setPassword(e.target.value);
       }}
      className=' bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
      type='password' 
      placeholder='password' 
      />

      <button className=' bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>

      <p className=' text-center'>Already have an Account? <Link to='/login' className=' text-blue-600'>Login here</Link></p>
    
    </form>
    </div>
    <div>
      <p className='text-[10px] leading-tight '>This site is protected by reCAPTCHA and the Google <span className='underline'>Privacy Policy </span> and <span className='underline'>Terms of Service</span> apply.</p>
    </div>
  </div>
  )
}

export default UserSignup