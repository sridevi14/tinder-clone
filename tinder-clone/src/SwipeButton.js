import React from 'react'; 
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton'
import './SwipeButton.css'


const SwipeButton = () => {
  return (
    <div className="swipe_buttons">
      <IconButton className="swipe_buttons_repeat">
        <ReplayIcon fontSize="large"></ReplayIcon>
      </IconButton>

      <IconButton className="swipe_buttons_left">
        <CloseIcon fontSize="large"></CloseIcon>
      </IconButton>

      <IconButton className="swipe_buttons_star">
        <StarRateIcon fontSize="large"></StarRateIcon>
      </IconButton>

      <IconButton className="swipe_buttons_right">
        <FavoriteIcon fontSize="large"></FavoriteIcon>
      </IconButton>

      <IconButton className="swipe_buttons_lightening">
        <FlashOnIcon fontSize="large"></FlashOnIcon>
      </IconButton>
  </div>
  );
}
 
export default SwipeButton;