// import React, { useState } from 'react'
// import { TextField,Button,Box,Alert } from '@mui/material'
// import { useNavigate } from 'react-router-dom'

// const UserLogin = () => {
//   const[error, setError]=useState({
//     status:false,
//     msg:"",
//     type:""
//   })
//   const navigate= useNavigate();
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     const actualData={
//       username: data.get('username'),
//       password: data.get('password')
//     }
//     if (actualData.username && actualData.password && (actualData.password.length)>=8){
//       console.log(actualData);
      
//       setError({status:true, msg:"Login Successful", type:'success'})
      
//       document.getElementById('login-form').reset()
//       navigate('/welcome')
//     }else if( (actualData.password.length)>0 && (actualData.password.length)<8){
//       setError({status:true, msg:"Password Length Should be greater than 8", type:'error'})
//     }
//     else{
//       setError({status:true, msg:"All the fields are required", type:'error'})
//     }
//   }
//   return (
//     <> 
//     <Box component='form' noValidate sx={{mt:1}} id="login-form" onSubmit={handleSubmit}>
//       <TextField margin='normal' required fullWidth id='username' name='username' label='Username' />
//       <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
//     <Box textAlign='center'>
//       <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>
//         Login
//       </Button>
//     </Box>
//     {error.status ?  <Alert severity={error.type} >{error.msg}</Alert> : ''}
//     </Box>
//     </>
//   )
// }

// export default UserLogin;



import React, { useState } from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: '',
    type: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get('username'),
      password: data.get('password'),
    };
    if (actualData.username && actualData.password && (actualData.password.length)>=8){
            console.log(actualData);
            try {
              const response = await axios.post('http://127.0.0.1:8000/login/', actualData);
              // console.log(response.data); // Assuming the server responds with a JSON containing success or error message
        
              setError({ status: true, msg: response.data.message, type: response.data.success ? 'success' : 'error' });
        
              document.getElementById('login-form').reset();
              if (response.data.success) {
                setError({status:true, msg:"Login Successful", type:'success'})
                
                
                navigate('/welcome'); // Navigate to the welcome page on successful login
              }
            } catch (error) {
                  console.error('Error logging in:', error);
                  setError({ status: true, msg: 'An error occurred while logging in.', type: 'error' });
                }
            // setError({status:true, msg:"Login Successful", type:'success'})
            
            document.getElementById('login-form').reset()
            navigate('/welcome')
          }

    else if( (actualData.password.length)>0 && (actualData.password.length)<8){
              setError({status:true, msg:"Password Length Should be greater than 8", type:'error'})
              
            }
            else{
              setError({status:true, msg:"All the fields are required", type:'error'})
            }

    // 
  };

  return (
    <>
      <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='username' name='username' label='Username' />
        <TextField
          margin='normal'
          required
          fullWidth
          id='password'
          name='password'
          label='Password'
          type='password'
        />
        <Box textAlign='center'>
          <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>
            Login
          </Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
      </Box>
    </>
  );
};

export default UserLogin;
