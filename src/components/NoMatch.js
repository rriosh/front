import React from 'react';
import { useLocation } from "react-router-dom";
import { CssBaseline, Typography, makeStyles, Container } from '@material-ui/core';
import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    },
}));

const NoMatch = () => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Error!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          La página <code>{`http://samrt-home.com/${location.pathname}`}</code> no exite.
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </div>
    );
}

export default NoMatch;