import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Avatar } from "@material-ui/core";
import { connect } from 'react-redux';
import Nav from "./Nav";
import { logoutAuthUser } from "../actions/authUser";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(4),
  },
  profile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    marginRight: '.5rem'
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const { profile, logout } = props;

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {profile && <Nav />}
          <Typography variant='h1' className={classes.title}>
            Would You Rather?
          </Typography>
          {profile && (
            <div onClick={(event) => logout()} className={classes.profile}>
              
                <Typography className={classes.name} variant='body1'>{profile.name}</Typography>
                
              <Avatar src={profile.avatarURL} />
              <Typography>LogOut</Typography>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps({ authedUser, users }, {user, profile }) {
  return {
    user,
    authedUser,
    profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logoutAuthUser())
    }
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
