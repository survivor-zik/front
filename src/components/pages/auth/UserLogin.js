import React, { useState } from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

    if (actualData.username && actualData.password && actualData.password.length >= 8) {
      try {
        const response = await axios.post('/login/', actualData);
        console.log(response)
        setError({ status: true, msg: response.data.message, type: response.status === 200 ? 'success'  : 'error' });
        document.getElementById('login-form').reset();
        if (response.status === 200) {
          setError({ status: true, msg: 'Login Successful', type: 'success' });

          setTimeout(() => {navigate('/welcome')}, 3000);
          
        } else {
          setError({ status: true, msg: 'Login Unsuccessful due to invalid credentials', type: 'error' });
        }
      } catch (error) {
        setError({ status: true, msg: 'error', type: 'error' });
      }
    } else if (actualData.password.length > 0 && actualData.password.length < 8) {
      setError({ status: true, msg: 'Password Length Should be greater than 8', type: 'error' });
    } else {
      setError({ status: true, msg: 'All the fields are required', type: 'error' });
    }
  };

  const handleAlertClose = () => {
    setError({ status: false, msg: '', type: '' });
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
        {error.status ? <Alert severity={error.type} onClose={handleAlertClose}>{error.msg}</Alert> : ''}
      </Box>
    </>
  );
};

export default UserLogin;
