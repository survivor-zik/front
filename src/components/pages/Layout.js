import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

function layout() {
  return (
    <>
    <CssBaseline />
    <Navbar />
    <Outlet />
    </>
  )
}

export default layout