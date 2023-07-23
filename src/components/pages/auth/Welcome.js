import { CssBaseline, Grid,Typography,Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate=useNavigate()
    const handleUpdate=()=>{
        navigate('/update')

    }
    const handleLogout=()=>{
        navigate('/loginreg')
    }
  return (
    <>
    <CssBaseline/>
    <Grid> 
        <Grid item sm={2} sx={{backgroundColor:'gray', p:5,color:'primary'}}>
            <Typography variant='h5'> </Typography>
            <Button variant='contained' color='primary' size='large' onClick={handleUpdate}>Update Details</Button>
            <Button variant='contained' color='warning' size='large' onClick={handleLogout}>Logout</Button>
        </Grid>
    </Grid>
    
    </>
  )
}

export default Welcome