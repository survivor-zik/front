import React,{ useState} from 'react';
import { Box, TextField , Button, Alert } from '@mui/material';
const UpdateDetails = () => {
    const[error, setError]=useState({status:false, msg:"", type:""})
    const handleSubmit=(event)=>{
        event.preventDefault();
        const actualData4={
            username: null,
            password: null,
            email: null,
            name: null,
            age: null

        }
        const data = new FormData(event.currentTarget);
        const actualData={
            username: data.get('username'),
            password: data.get('password'),
            email: data.get('email'),
            name: data.get('name'),
            age: data.get('age')

        }
        const notNullProperties = Object.keys(actualData).filter(key => actualData[key] === null);

        console.log('Properties null:', notNullProperties);
        // if(actualData.username ){
        //     if(actualData.email){
        //     setError({status:true, msg:"Email Updated Successfully", type:'success'})
        //     document.getElementById('details-change-form').reset()
        // }else if(actualData.password){
        //     setError({status:true, msg:"Password Updated Successfully", type:'success'})
        //     document.getElementById('details-change-form').reset()
        // }else if(actualData.name){
        //     setError({status:true, msg:"Name Updated Successfully", type:'success'})
        //     document.getElementById('details-change-form').reset()
        // }else if(actualData.age){
        //     setError({status:true, msg:"Age Updated Successfully", type:'success'})
        //     document.getElementById('details-change-form').reset()
        // }
        // }
    }


  return (
    <>
    <Box  sx={{display:'flex',flexDirection:'column' , flexWrap:'wrap', maxWidth: 600,mx:4 }}>

    <h4>Update Details (Enter details you want to update)</h4>
    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt :1 }} id='details-change-form'>
        <TextField margin='normal' required fullWidth name='username' id='username' label='Enter your existing username' />
        <TextField margin='normal'  fullWidth name='password' id='password' type='password' label='Enter new password' />
        <TextField margin='normal'  fullWidth name='email' id='email' type='email' label='Enter your new email ' />
        <TextField margin='normal'  fullWidth name='name' id='name' label='Enter your new name' />
        <TextField margin='normal'  fullWidth name='age' id='age' label='Enter your new Age' />
        <Box textAlign='center' >
            <Button type='update' variant='contained' sx={{mt:3, mb:2, px:5}} >Update</Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg} </Alert> : ""}
    </Box>
    </Box>
    </>
  )
}

export default UpdateDetails;