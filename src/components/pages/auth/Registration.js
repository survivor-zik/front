import React, { useState } from 'react'
import { TextField,Button,Box,Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Registration = () => {

    const[error, setError]=useState({
        status:false,
        msg:"",
        type:""
      })
      const navigate= useNavigate();
      const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData={
        name: data.get('name'),
        username: data.get('username'),
        password: data.get('password'),
        confirm_password: data.get('confirm_password'),
        email: data.get('email'),
        age:data.get('age')
        }
        if (actualData.username && actualData.password && actualData.email && actualData.confirm_password && (actualData.password.length)>=8 && actualData.password === actualData.confirm_password){
          console.log(actualData);
          try{
            const response = await axios.post('/usereg/',actualData);

            document.getElementById('registration-form').reset()  
          if (response.status === 201) {
            setError({ status: true, msg: 'Registration Successful', type: 'success' });
            
            setTimeout(() => {navigate('/welcome')}, 4000);
            
          }else if (response.status == 400) {
            // console.log(response,"proper")
            setError({ status: true, msg: 'User or Email already exist' , type: 'error' });
          }else{
            setError({ status: true, msg: 'Registration Unsuccessful due to invalid credentials', type: 'error' });
          }
        }catch(error){
          // console.log(response)
            setError({ status: true, msg:'Invalid username or email', type: 'error' });
          }

        }else if( (actualData.password.length)>0 && (actualData.password.length)<8){
          setError({status:true, msg:"Password Length Should be greater than 8", type:'error'})

        }else if(actualData.password !== actualData.confirm_password) {
            setError({status:true, msg:"Password and Confirm Password should be same.", type:'error'})

        }else{
          setError({status:true, msg:"All the fields are required", type:'error'})
        }
      }
      return (
        <> 
        <Box component='form' noValidate sx={{mt:1}} id="registration-form" onSubmit={handleSubmit}>
          <TextField margin='normal' required fullWidth id='username' name='username' label='Username' />
          <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
          <TextField margin='normal' required fullWidth id='confirm_password' name='confirm_password' label='Confirm Password' type='password' />
          <TextField margin='normal' required fullWidth id="email" name='email' label='Email' type='email' />
          <TextField margin='normal' required fullWidth id="name" name='name' label='Name' />
          <TextField margin='normal' required fullWidth id="age" name='age' label='Age' />
        <Box textAlign='center'>
          <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>
            Sign Up
          </Button>
        </Box>
        {error.status ?  <Alert severity={error.type} >{error.msg}</Alert> : ''}
        </Box>
        </>
      )
}

export default Registration