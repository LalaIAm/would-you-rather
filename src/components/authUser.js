import React from "react";
import { connect } from "react";
import { Typography, Avatar } from "@material-ui/core";

const AuthUser = (props) => {
  const { userProfile, authedUser } = props;

  if (!authedUser) {
    return null;
  }
  return (
    <div>
      <Typography variant='h5'>{userProfile.name}</Typography>
      <Avatar src={userProfile.avatarURL} />
    </div>
  );
};

function mapStateToProps({ users }, {user}) {
  const userProfile = users[user];
  return {
    userProfile,
  };
}

export default connect(mapStateToProps)(AuthUser);
