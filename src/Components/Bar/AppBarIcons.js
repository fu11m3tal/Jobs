import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default function AppBarIcons(props) {
  var classes = useStyles();
  var { search, handleSearchInput } = props;
  var [anchorEl, setAnchorEl] = React.useState(null);
  var handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  var menuId = 'primary-search-account-menu';
  
  return (
    <div className={classes.sectionDesktop}>
      {/* MAIL COMPONENT (BUTTON) */}
      <IconButton aria-label="show 1000 new mails" color="inherit">
        <Badge badgeContent={1000} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
      {/* NOTIFICATION COMPONENT (BUTTON) */}
      <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      {/* PROFILE COMPONENT (BUTTON) */}
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
}