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
  const [name, setName] = useState("");

  const [image, setImage] = useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    let newName = event.target.value;
    setName(newName);
  };

  const handleAvatarChange = (event) => {
    setImage(event.target.value);
  };

  const { createUser } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(name, image);
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
              value={image}
              name='avatar'
            >
              <FormControlLabel
                value={avatars.user1}
                control={<Radio color='secondary' />}
                label={<Avatar src={avatars.user1} />}
                labelPlacement='bottom'
              />
              <FormControlLabel
                value={avatars.user2}
                control={<Radio color='secondary' />}
                label={<Avatar src={avatars.user2} />}
                labelPlacement='bottom'
              />
              <FormControlLabel
                value={avatars.user3}
                control={<Radio color='secondary' />}
                label={<Avatar src={avatars.user3} />}
                labelPlacement='bottom'
              />
              <FormControlLabel
                value={avatars.user4}
                control={<Radio color='secondary' />}
                label={<Avatar src={avatars.user4} />}
                labelPlacement='bottom'
              />
              <FormControlLabel
                value={avatars.user5}
                control={<Radio color='secondary' />}
                label={<Avatar src={avatars.user5} />}
                labelPlacement='bottom'
              />
              <FormControlLabel
                value={avatars.user6}
                control={<Radio color='secondary' />}
                label={<Avatar src={avatars.user6} />}
                labelPlacement='bottom'
              />
            </RadioGroup>
          </FormControl>
          <Button
            onClick={(event) => handleSubmit(event)}
            color='primary'
            variant='contained'
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: (name, image) => {
      dispatch(handleNewUser(name, image));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
