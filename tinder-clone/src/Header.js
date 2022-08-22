import React from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import './Header.css'

import tinder_logo from './assets/tinder-logo.png'
function Header() {
  
  
  return (
    <div className='header'>
      <IconButton>
      <PersonIcon className="header_icon" fontSize="large"> 
    </PersonIcon>
      </IconButton>
      <img src={tinder_logo} alt=
      'logo' className='header_logo'>
      </img>

      <IconButton>
        <ForumIcon  className="header_icon" fontSize="large"></ForumIcon>
        </IconButton>
    </div>

  );
}
 
export default Header;