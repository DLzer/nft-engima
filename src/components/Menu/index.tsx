import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import UIKitMenu from "@material-ui/core/Menu";
import styled from 'styled-components';

const Menu = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const Wrapper = styled.div`
    position: relative;
    width: 100%;
    `;

    return (
        <Wrapper>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Open Menu
            </Button>
            <UIKitMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                {...props}
            >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            </UIKitMenu>
        </Wrapper>
    )

};

export default Menu;