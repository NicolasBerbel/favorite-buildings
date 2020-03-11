import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Building from './Building';
import Grid from '@material-ui/core/Grid';
import { buildingsStore } from '../../contexts/BuildingsContext';
import api, {IBuildingsResponse} from '../../services/api';

const useStyles = makeStyles(() => ({
  root: {
  }
}))

export const BuildingsList : React.FC = () => {
  const classes = useStyles();
  const {state, dispatch} = React.useContext(buildingsStore);
  const { pageNumber, pages, loading } = state;
  const page = pages[pageNumber]
  const buildings = page?.buildings || [];

  React.useEffect(() => {
    dispatch({type: 'request'});

    api.get<IBuildingsResponse>('/buildings')
      .then(
        res => dispatch({type: 'success', response: res.data}),
        () => dispatch({type: 'failure', error: 'An error occured during the buildings request, please try again later!'})
      );
  }, [dispatch])

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
