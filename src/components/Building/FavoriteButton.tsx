import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Theme, makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { buildingsStore } from '../../contexts/BuildingsContext';

const useStyles = makeStyles<Theme, {isFavorite: boolean}>((theme) => ({
  root: {
    color: ({isFavorite}) => isFavorite ? theme.palette.secondary.main : 'white',
  }
}));

export interface IFavoriteButtonProps {
  id: string,
}

export const FavoriteButton : React.FC<IFavoriteButtonProps> = props => {
  const {state, dispatch} = React.useContext(buildingsStore);
  const isFavorite = state.favorites.includes(props.id);
  const FavIcon = isFavorite ? FavoriteIcon : FavoriteBorderIcon;
  const styles = useStyles( {isFavorite} );

  return (
    <Tooltip title="Favorite">
      <IconButton className={styles.root} onClick={() => dispatch({type: 'favorite', id: props.id})}>
        <FavIcon color="inherit"/>
      </IconButton>
    </Tooltip>
  )
}

export default FavoriteButton;
