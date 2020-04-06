import React, { useState } from "react";
import {
  Card,
  Typography,
  Paper,
  Grid,
  CardContent,
  Fab,
  CardActions,
  IconButton,
  Button,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { handleAnswer } from "../actions/shared";
import StarsTwoToneIcon from "@material-ui/icons/StarsTwoTone";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
    height: "80vh",
  },
  actions: {
    textAlign: "center",
    margin: "auto",
  },
  questionCard: {
    background: "#b6dbf2",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  selected: {
    color: "secondary",
  },
  percent: {
    backgroundColor: "primary",
    borderRadius: "50%",
  },
  avatar: {
    margin: "auto",
  },
}));

const ResultsCard = (props) => {
  const classes = useStyles();

  const { id, question, authedUser, authorProfile, dispatch } = props;

  if (question === null) {
    return <p>This question does not exist</p>;
  }

  const getNumUsers = (option) => {
    if (option.votes.length === 1) {
      return `${option.votes.length} user would rather:`;
    } else {
      return `${option.votes.length} users would rather:`;
    }
  };

  const isUserAnswer = (option) => {
    if (option.votes.includes(authedUser)) {
      return true;
    } else {
      return false;
    }
  };

  const getPercent = (option) => {
    const totalVotes =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    const percent = Math.floor((option.votes.length / totalVotes) * 100);
    return percent;
  };

  return (
    <Paper className={classes.container}>
      <Avatar
        alt={authorProfile.name}
        src={authorProfile.avatarURL}
        className={classes.avatar}
      />
      <Typography align='center' variant='body2'>
        {question.author} asks
      </Typography>
      <Typography align='center' variant='h3'>
        Would you rather:
      </Typography>

      <div className={classes.innerContainer}>
        <Grid alignItems='center' justify='center' container>
          <Grid item>
            <Card className={classes.questionCard}>
              {isUserAnswer(question.optionOne) && (
                <div className='user-choice'>You!</div>
              )}
              <CardContent>
                <Typography variant='body1'>
                  {getNumUsers(question.optionOne)}
                </Typography>
                <Typography variant='h4'>{question.optionOne.text}</Typography>
                <div className='percent-text'>
                  <Typography variant='h5'>
                    <span className='percent'>
                      {getPercent(question.optionOne)}%
                    </span>{" "}
                    of Users
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <div className='orBadge'>Results</div>
          </Grid>
          <Grid item>
            <Card className={classes.questionCard}>
              {isUserAnswer(question.optionTwo) && (
                <div className='user-choice'>You!</div>
              )}
              <CardContent>
                <Typography variant='body1'>
                  {getNumUsers(question.optionTwo)}
                </Typography>
                <Typography variant='h4'>{question.optionTwo.text}</Typography>
                <div className='percent-text'>
                  <Typography variant='h5'>
                    <span className='percent'>
                      {getPercent(question.optionTwo)}%
                    </span>{" "}
                    of Users
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <div className='submit-container'>
          <Button
            variant='contained'
            color='secondary'
            component={RouterLink}
            to='/'
          >
            Back to List
          </Button>
        </div>
      </div>
    </Paper>
  );
};

function mapStateToProps(
  { authedUser, users, questions },
  { id, authorProfile }
) {
  const question = questions[id];

  return {
    authedUser,
    question,
    id,
    authorProfile,
  };
}

export default connect(mapStateToProps)(ResultsCard);
