import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: `100vh`,
  },
});

const Layout = (props) => {
  const { classes, children } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Header
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={24} justify="center">
        <Grid item xs={2}>
          <Paper className={classes.paper} elevation={1}>
            Menu
          </Paper>
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
