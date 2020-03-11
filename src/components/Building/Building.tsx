import React from 'react';
import { IBuilding } from './types';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import LocationOn from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BathroomIcon from '@material-ui/icons/Bathtub';
import SuiteIcon from '@material-ui/icons/KingBed';
import BedroomIcon from '@material-ui/icons/Hotel';
import ParkingIcon from '@material-ui/icons/DirectionsCar';
import AreaIcon from '@material-ui/icons/Fullscreen';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { buildingsStore } from '../../contexts/BuildingsContext';

const equalOrRange = (a: number, b: number) => a === b ? `${a}` : `${a}~${b}`;

const useStyles = makeStyles<Theme, {isFavorite: boolean}>((theme) => ({
  root: {
    position: 'relative',
    overflow: 'initial',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    transition: 'transform .15s ease',
    transform: ({isFavorite}) => isFavorite ? 'scale(1.02)' : 'scale(1)',

  },
  media: {
    width: '100%',
    height: 0,
    paddingBottom: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    backgroundPosition: 'center',
    transition: 'background-size .15s ease',
    backgroundSize: ({isFavorite}) => isFavorite ? '120%' : '100%',
  },
  title: {
    marginBottom: 0,
  },
  areaValue: {
  },
  priceValue: {
    fontWeight: 'bold',
  },
  content: {
    position: 'relative',
    padding: 24,
    margin: '-24% 16px 0',
    backgroundColor: '#fff',
    borderRadius: 4,
    transition: `box-shadow .2s ease-in`,
    boxShadow: ({isFavorite}) => isFavorite ? `0 -2px 0 ${theme.palette.secondary.main}, ${theme.shadows[5]}` : theme.shadows[2],
  },
  favorite: {
    color: ({isFavorite}) => isFavorite ? theme.palette.secondary.main : 'white',
    position: 'absolute',
    top: 12,
    right: 12,
  },
  locationIcon: {
    marginTop: '.125em',
    marginRight: 4,
    fontSize: 16,
  },
}));

export const Building : React.FC<IBuilding> = props => {
  const {state, dispatch} = React.useContext(buildingsStore);
  const {
    id,
    name,
    address,
    description,
    min_area,
    max_area,
    min_bathrooms,
    max_bathrooms,
    min_bedrooms,
    max_bedrooms,
    min_suites,
    max_suites,
    min_parking,
    max_parking,
    min_price,
    // orulo_url,
    default_image,
  } = props;

  const isFavorite = state.favorites.includes(id);
  const FavIcon = isFavorite ? FavoriteIcon : FavoriteBorderIcon;

  const styles = useStyles( {isFavorite} );

  React.useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  }, [state.favorites])

  return (
    <Card elevation={0} className={styles.root}>
      <Tooltip title="Favorite">
        <IconButton className={styles.favorite} onClick={() => dispatch({type: 'favorite', id})}>
          <FavIcon color="inherit"/>
        </IconButton>
      </Tooltip>
      <CardMedia
        className={styles.media}
        image={default_image["520x280"]}
      />
      <CardContent className={styles.content}>
        <Typography variant='h6' className={styles.title}>{name}</Typography>
        <Box color={'grey.500'} display={'flex'} alignItems={'start'} mb={1}>
          <LocationOn className={styles.locationIcon} />
          <span>{address.area} - {address.city}</span>
        </Box>
        <Box color={'grey.500'} display={'flex'} alignItems={'center'} mb={1}>
          <AreaIcon className={styles.locationIcon} />
          <span className={styles.areaValue}>
            {equalOrRange(min_area, max_area)}m²
          </span>
        </Box>
        <Box color={'grey.500'} display={'flex'} alignItems={'start'} mb={1}>
          <LocalOfferIcon className={styles.locationIcon} />
          <Typography variant={'body2'} className={styles.priceValue}>
            {min_price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
          </Typography>
        </Box>
        <Typography color={'textSecondary'} variant={'body2'}>{description}</Typography>
        <Box
          mt={4}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Tooltip title="Bathrooms">
            <Badge badgeContent={equalOrRange(min_bathrooms, max_bathrooms)} color="secondary">
              <BathroomIcon color="action" />
            </Badge>
          </Tooltip>
          <Tooltip title="Suites">
            <Badge badgeContent={equalOrRange(min_suites, max_suites)} color="secondary">
              <SuiteIcon color="action" />
            </Badge>
          </Tooltip>
          <Tooltip title="Bedrooms">
            <Badge badgeContent={equalOrRange(min_bedrooms, max_bedrooms)} color="secondary">
              <BedroomIcon color="action" />
            </Badge>
          </Tooltip>
          <Tooltip title="Parking">
            <Badge badgeContent={equalOrRange(min_parking, max_parking)} color="secondary">
              <ParkingIcon color="action" />
            </Badge>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Building;