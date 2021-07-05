import React from "react";
import Button from '@material-ui/core/Button';
import UIMenu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const Dropdown = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Marketplace
            </Button>
            <UIMenu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            </UIMenu>
        </div>
    )
}

export default Dropdown