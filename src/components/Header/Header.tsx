import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Pagination from '../Pagination';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles( theme => ({
  toolbar: {
    paddingRight: 0,
    paddingLeft: 0,
    color: theme.palette.common.white
  }
}));

export const Header : React.FC = props => {
  const classes = useStyles();

  return (
    <AppBar color="primary" elevation={2}>
      <Toolbar className={classes.toolbar}>
        <Container>
          <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
            <Typography color="inherit" variant="h5">Buildings</Typography>
            <Box mt={2} mb={2}>
              <Pagination />
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
