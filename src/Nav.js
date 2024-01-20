import React from 'react'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BungalowIcon from '@mui/icons-material/Bungalow';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <div class="topnav">
  <Link to='/log'><a  href="#home">Home</a></Link> 
 
 <div class="leftnav">
  
 <Link to='/'><a href="#contact">Login</a></Link> 
 <Link to='/login'> <a href="#about">Logout </a></Link>
  </div>
</div>
    </div>
  )
}

export default Nav
