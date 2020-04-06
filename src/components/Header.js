import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Avatar } from "@material-ui/core";

import Nav from "./Nav";

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
}));

const UserBox = (props) => {
  return (
    <div>
      <Typography variant='h4'>{props.userProfile.name}</Typography>
      <Avatar src={props.userProfile.avatarURL} />
    </div>
  );
};

const Header = (props) => {
  const classes = useStyles();
  const { userProfile } = props;
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Nav />

          <Typography variant='h1' className={classes.title}>
            Would You Rather?
          </Typography>
        
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps({ authedUser, users }, {user}) {
  const userProfile = users[authedUser];
  return {
    userProfile,
    authedUser,
  };
}

export default Header;
