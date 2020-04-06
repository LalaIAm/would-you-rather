import React, { useState } from "react";
import { connect } from "react-redux";
import { handleNewUser } from "../actions/shared";
import {
  Paper,
  Typography,
  FormControl,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Avatar,
  Button,
} from "@material-ui/core";
import * as avatars from "../images";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
    margin: "3rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    height: "20rem",
    justifyContent: "space-evenly",
  },
});

const NewUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    let newName = event.target.value;
    setName(newName);
    newName = newName.toLowerCase().trim();
    if (newName.includes(" ")) {
      newName = newName.split(" ").join("");
    }
    setUsername(newName);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
    };
    
    const { createUser } = props;

  const handleSubmit = (event) => {
      event.preventDefault();
      createUser(name, username, avatar)
  };
  return (
    <div>
      <Paper className={classes.container}>
        <Typography variant='h2'>Create A Profile</Typography>
        <form className={classes.form}>
          <FormControl className={classes.formgroup}>
            <TextField
              variant='filled'
              value={name}
              onChange={(event) => handleChange(event)}
              label='Your Name'
            />
          </FormControl>
          <FormControl className={classes.formgroup}>
            <FormLabel component='legend'>Select Avatar</FormLabel>
            <RadioGroup
              onChange={handleAvatarChange}
              row
              value={avatar}
              name='avatar'
            >
              <FormControlLabel
                value='user1'
                control={<Radio color='secondary' />}
                label={<Avatar src={avatars.user1} />}
                labelPlacement='bottom'
              />
              <FormControlLabel
                value='user2'
                control={<Radio color='secondary' />}
                label={<Avatar src={avatars.user2} />}
                labelPlacement='bottom'
              />
              <FormControlLabel
                value='user3'
                control={<Radio color='secondary' />}
                label={<Avatar src={avatars.user3} />}
                labelPlacement='bottom'
              />
              <FormControlLabel
                value='user4'
                control={<Radio color='secondary' />}
                label={<Avatar src={avatars.user4} />}
                labelPlacement='bottom'
              />
              <FormControlLabel
                value='user5'
                control={<Radio color='secondary' />}
                label={<Avatar src={avatars.user5} />}
                labelPlacement='bottom'
              />
              <FormControlLabel
                value='user6'
                control={<Radio color='secondary' />}
                label={<Avatar src={avatars.user6} />}
                labelPlacement='bottom'
              />
            </RadioGroup>
          </FormControl>
          <Button onClick={(event) => handleSubmit(event)} color='primary' variant='contained'>
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

function mapStateToProps({}) {}

function mapDispatchToProps({ dispatch }) {
  return {
    createUser: (name, uid, image) => {
      dispatch(handleNewUser(name, uid, image));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
