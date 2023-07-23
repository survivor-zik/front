import React, { useState } from 'react'
import { TextField,Button,Box,Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  const[error, setError]=useState({
    status:false,
    msg:"",
    type:""
  })
  const navigate= useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData={
      username: data.get('username'),
      password: data.get('password')
    }
    if (actualData.username && actualData.password && (actualData.password.length)>=8){
      console.log(actualData);
      setError({status:true, msg:"Login Successful", type:'success'})
      
      document.getElementById('login-form').reset()
      navigate('/welcome')
    }else if( (actualData.password.length)>0 && (actualData.password.length)<8){
      setError({status:true, msg:"Password Length Should be greater than 8", type:'error'})
    }
    else{
      setError({status:true, msg:"All the fields are required", type:'error'})
    }
  }
  return (
    <> 
    <Box component='form' noValidate sx={{mt:1}} id="login-form" onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='username' name='username' label='Username' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
    <Box textAlign='center'>
      <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>
        Login
      </Button>
    </Box>
    {error.status ?  <Alert severity={error.type} >{error.msg}</Alert> : ''}
    </Box>
    </>
  )
}

export default UserLogin;