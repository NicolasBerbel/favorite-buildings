import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IBuilding } from './types';
import Building from './Building';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
  }
}))

interface IBuildingsListProps {
  buildings: IBuilding[],
}

export const BuildingsList : React.FC<IBuildingsListProps> = ({ buildings }) => {
  const classes = useStyles();
  
  return (
    <Grid container spacing={3} className={classes.root}>
      {
        buildings.map( b => <Grid key={b.id} item xs={12} sm={6} md={4} lg={3}><Building {...b} /></Grid> )
      }
    </Grid>
  )
}

export default BuildingsList;
