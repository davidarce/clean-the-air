import React from 'react';
import { LinkNoDecor } from '../../commons/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/Typography";
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: 'white',
    },
    link: {
      color: 'black',
      textDecoration: 'none',
    },
    margin: {
      fontSize: '11px',
      margin: theme.spacing(1),
    },
  }),
);
const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar} >
      <Box textAlign='center' p={2}>
        <LinkNoDecor to="/">
          <Typography variant="h4" component="h1" >Clean the air 🍃</Typography>
        </LinkNoDecor>
      </Box>
    </AppBar>
  );
};

export default Header;
