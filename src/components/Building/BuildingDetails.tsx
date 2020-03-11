import React from 'react';
import equalOrRange from './equalOrRange';
import FavoriteButton from './FavoriteButton';
import { IBuilding } from './types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { TransitionProps } from '@material-ui/core/transitions';
import LocationOn from '@material-ui/icons/LocationOn';
import BathroomIcon from '@material-ui/icons/Bathtub';
import SuiteIcon from '@material-ui/icons/KingBed';
import BedroomIcon from '@material-ui/icons/Hotel';
import ParkingIcon from '@material-ui/icons/DirectionsCar';
import AreaIcon from '@material-ui/icons/Fullscreen';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export interface IBuildingDetailsProps extends IBuilding {
  open: boolean,
  onClose: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      // position: 'relative',
    },
    locationIcon: {
      marginTop: '.125em',
      marginRight: 4,
      fontSize: 16,
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    media: {
      maxWidth: '100%',
      width: '100%'
    },
    priceValue: {
      fontWeight: 'bold',
    },
  }),
);

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const BuildingDetails : React.FC<IBuildingDetailsProps> = props => {
  const { open, onClose } = props;
  const classes = useStyles();
  const {
    id,
    name,
    address,
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
    description,
    default_image,
  } = props;

  return (
    <div>
      <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {name}
            </Typography>
            <FavoriteButton id={id} />
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Container maxWidth="sm">
          <Box mt={3}>
            <img
              className={classes.media}
              alt={default_image.description}
              src={default_image["520x280"]}
            />
          </Box>
          <Box color={'grey.500'} display={'flex'} alignItems={'start'} mb={1}>
            <LocationOn className={classes.locationIcon} />
            <span>{address.area} - {address.city}</span>
          </Box>
          <Box color={'grey.500'} display={'flex'} alignItems={'center'} mb={1}>
            <AreaIcon className={classes.locationIcon} />
            <span>{equalOrRange(min_area, max_area)}m²</span>
          </Box>
          <Box color={'grey.500'} display={'flex'} alignItems={'start'} mb={1}>
            <LocalOfferIcon className={classes.locationIcon} />
            <Typography variant={'body2'} className={classes.priceValue}>
              {min_price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </Typography>
          </Box>
          <Typography color={'textSecondary'} variant={'body2'}>{description}</Typography>
          <List>
            <ListItem>
              <ListItemIcon><BathroomIcon /></ListItemIcon>
              <ListItemText primary="Bathrooms" secondary={equalOrRange(min_bathrooms, max_bathrooms)} />
            </ListItem>
            <Divider />
            
            <ListItem>
              <ListItemIcon><SuiteIcon /></ListItemIcon>
              <ListItemText primary="Suites" secondary={equalOrRange(min_suites, max_suites)} />
            </ListItem>
            <Divider />
            
            <ListItem>
              <ListItemIcon><BedroomIcon /></ListItemIcon>
              <ListItemText primary="Bedrooms" secondary={equalOrRange(min_bedrooms, max_bedrooms)} />
            </ListItem>
            <Divider />
            
            <ListItem>
              <ListItemIcon><ParkingIcon /></ListItemIcon>
              <ListItemText primary="Parking" secondary={equalOrRange(min_parking, max_parking)} />
            </ListItem>
            <Divider />
          </List>
          <Box mb={3} display='flex' justifyContent='flex-end'>
            <Button
              startIcon={<ExitToAppIcon />}
              href={props.orulo_url}
              target="_blank"
              color="secondary"
            >
              Learn more
            </Button>
          </Box>
        </Container>
      </Dialog>
    </div>
  )
};

export default BuildingDetails;