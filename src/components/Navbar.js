import React from 'react'
import { AppBar,Box,Toolbar, Typography,Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <Box sx={{flexGrow:1}}>
    <AppBar position='static' color='primary'>
        <Toolbar>
            <Typography variant='h5' component="div" sx={{flexGrow:1}}>
                Working
            </Typography>
            <Button component={NavLink} to='/' style={({isActive})=>{return{backgroundColor: isActive? '#2763d2': '' }}} color='inherit' sx={{textTransform:'none'}}>Home</Button>
            <Button component={NavLink} to='/loginreg' style={({isActive})=>{return{backgroundColor: isActive? '#2763d2': '' }}} color='inherit' sx={{textTransform:'none'}}>Login/Register</Button>
        </Toolbar>
    </AppBar>
    </Box>
    </>
  )
}

export default Navbar