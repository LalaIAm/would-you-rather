import React, { useState } from "react";
import {
  Typography,
  TextField,
  Paper,
  FormControl,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { handleSaveQuestion } from "../actions/shared";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "90vh",
  },
  title: {
    padding: "1.5rem",
  },
  formContainer: {
    width: "80%",
    height: "70%",
    margin: "auto",
    padding: "1rem",
  },

  form: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
  input: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
});

const NewQuestion = (props) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [redirect, setRedirect] = useState(false);

  const classes = useStyles();

  const { authUser, addQuestion } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    addQuestion(optionOne, optionTwo);

    setOptionOne("");
    setOptionTwo("");
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to='/' />;
  }

  return (
    <div className={classes.container}>
      <Typography className={classes.title} align='center' variant='h3' as='h2'>
        Would You Rather...
      </Typography>
      <Paper className={classes.formContainer}>
        <form className={classes.form}>
          <FormControl>
            <TextField
              className={classes.input}
              id='optionOne'
              value={optionOne}
              label='Your First Option'
              onChange={(event) => setOptionOne(event.target.value)}
              variant='filled'
            />
          </FormControl>
          <div className='orBadge'>OR</div>
          <FormControl>
            <TextField
              className={classes.input}
              id='optionTwo'
              value={optionTwo}
              label='Your Second Option'
              onChange={(event) => setOptionTwo(event.target.value)}
              variant='filled'
            />
          </FormControl>
          <Button variant='contained' onClick={(event) => handleSubmit(event)} color='secondary'>
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (optionOne, optionTwo) => {
      dispatch(handleSaveQuestion(optionOne, optionTwo));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
