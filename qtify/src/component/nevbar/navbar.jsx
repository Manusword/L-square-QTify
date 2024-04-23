import './navbar.css';
import logo from "../../assets/logo.png"
import searchLogo from '../../assets/search-icon.svg';


export default function Nevbar() {
  return (
    <>
        <nav className='navbar'>
          <img src={logo} alt='logo' className='logo' />
          <div className='searchbox'>
            <input type='text' className='search' placeholder='Search a album of your choice' />
            <button  className='searchbutton'>
              <img src={searchLogo} alt='logo' className='searchLogo' />
            </button>
          </div>
          <button  className='button'>Give Feedback</button>
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

  //normal search
    <input type="text" className='searchbox' placeholder="Search a album of your choice"></input> 
    */