import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Building from './Building';
import Grid from '@material-ui/core/Grid';
import { buildingsStore } from '../../contexts/BuildingsContext';

const useStyles = makeStyles(() => ({
  root: {
  }
}))

export const BuildingsList : React.FC = () => {
  const classes = useStyles();
  const {state} = React.useContext(buildingsStore);
  const { pageNumber, pages, loading } = state;
  const page = pages[pageNumber]
  const buildings = page?.buildings || [];

  return (
    <>
    {loading ? 'Loading...' : (
      <Grid container spacing={3} className={classes.root}>
        {buildings.map( b => <Grid key={b.id} item xs={12} sm={6} md={4} lg={3}><Building {...b} /></Grid> )}
      </Grid>
    )}
    </>
  )
}

export default BuildingsList;
