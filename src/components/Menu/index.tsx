import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import UIMenu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Dropdown } from "react-bootstrap";
const Menu = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };


    const useStyles = makeStyles((theme) => ({
      root: {
        boxShadow: 'rgba(14, 14, 14, 0.25) 0px 0px 8px 0px',
        height: '65px',
        position: 'sticky',
        top: '0px',
        zIndex: 50,
        transition: 'top 0.5s ease 0s',
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'black',
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));

    const classes = useStyles();

    return (
      // <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ENIGMA
          </Typography>
          <Button color="inherit">connect</Button>
          <Dropdown></Dropdown>
        </Toolbar>
      </AppBar>
    // </div>
    )

};

export default Menu;