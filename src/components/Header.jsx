import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  toolbar:{
    textAlign: 'center',
    height: 80
  },
  h2:{
    fontSize:24,
  },
  heading:{
    margin: 'auto'
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography
         className={classes.heading}
         variant="h2"
         align="center"
         >
            Todo List
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Header;