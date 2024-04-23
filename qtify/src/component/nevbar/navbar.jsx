import './navbar.css';
import logo from "../../assets/logo.png"
import Button from '@mui/material/Button';


export default function Nevbar() {
  return (
    <>
        <nav className='navbar'>
          <img src={logo} alt='logo' className='logo' />
          <button variant="contained" className='button'>Give Feedback</button>
        </nav>
    </>
  );
}




/*
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useTheme } from '@mui/material/styles';

const theme = useTheme();
<Box >
      <AppBar position="static" className='nevbar'>
      <Box > <Typography variant="h6" component="div" >
            News
          </Typography></Box>
      <Box ><Button color="inherit">Login</Button></Box>
           
         
        
        
      </AppBar>
    </Box>

    */