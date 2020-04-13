import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default function AppBarMenu(props) {
  var classes = useStyles();
  var { search, handleSearchInput } = props;
  var [anchorEl, setAnchorEl] = React.useState(null);
  var handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  var menuId = 'primary-search-account-menu';
  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="open drawer"
    >
    <MenuIcon />
    </IconButton>
  );
}