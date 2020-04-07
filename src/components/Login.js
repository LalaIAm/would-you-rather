import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Paper,
  FormControl,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@material-ui/core";
import { setAuthUser } from "../actions/authUser";
import { makeStyles } from "@material-ui/core/styles";
import NewUserForm from './NewUserForm';

const useStyles = makeStyles({
  formTitle: {
    fontSize: "2rem",
    marginTop: "1.5rem",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  formControl: {
    width: "90%",
    margin: "1rem auto",
  },
  label: {
    marginLeft: "1rem",
  },
  select: {
    width: "18rem",
    margin: "auto",
  },
  btn: {
    margin: "auto",
    textAlign: "center",
  },
});
const Login = (props) => {
  const [authUsername, setAuthUsername] = useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    setAuthUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { login } = props;
    if (authUsername) {
      login(authUsername);
    } else {
      alert('You must select a user before loggin in.')
    }
  };

  const { userArray} = props;

  return (
    <div className={classes.container}>
      
      <Paper className={classes.paper}>
        <Typography className={classes.formTitle} variant='h2'>
          Choose Your Avatar
        </Typography>
        <form>
          <FormControl variant='filled' className={classes.formControl}>
            <InputLabel className={classes.label} id='username-select-label'>
              Avatar Name
            </InputLabel>
            <Select
              className={classes.select}
              labelId='username-select-label'
              id='username-select'
              value={authUsername}
              onChange={handleChange}
            >
              <MenuItem value=''></MenuItem>
              {userArray.map((user) => (
                <MenuItem key={user.key} value={user.value}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant='contained'
            className={classes.btn}
            color='secondary'
            onClick={(event) => handleSubmit(event)}
          >
            Submit
          </Button>
        </form>
        <Typography>OR</Typography>
        <NewUserForm />
      </Paper>
    </div>
  );
};

function mapStateToProps({ users }) {
  const userOptions = Object.keys(users).map((user) => {
    return {
      key: users[user].id,
      image: users[user].avatarURL,
      value: users[user].id,
      name: users[user].name,
    };
  });

  return {
    userArray: userOptions,
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (id) => {
      dispatch(setAuthUser(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
