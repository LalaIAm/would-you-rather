import React, { useState } from "react";
import ResultsCard from "./ResultsCard";
import {
  Card,
  Typography,
  Paper,
  Grid,
  CardContent,
  Fab,
  CardActions,
  Button,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { handleAnswer } from "../actions/shared";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import NotFound from "./NotFound";

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
  avatar: {
    margin: "auto",
  },
}));

const QuestionContainer = (props) => {
  const classes = useStyles();
  const [selection, setSelection] = useState("");
  const [colorOne, setColorOne] = useState("primary");
  const [colorTwo, setColorTwo] = useState("primary");



  const toggleSelection = (option) => {
    setSelection(option);
    if (option === "optionOne") {
      setColorOne("secondary");
      setColorTwo("primary");
    } else {
      setColorOne("primary");
      setColorTwo("secondary");
    }
  };

  const { questions, users, authedUser, dispatch } = props;
  const { id } = props.match.params;
  const question = questions[id]
  const authorProfile = users[question.author]

  const handleSubmit = (event) => {
    event.preventDefault();
    const answer = selection;
    dispatch(handleAnswer(id, answer));
  };

  if (question === null) {
    return <p>This question does not exist</p>;
  }

  const goHome = () => {
    props.history.push("/");
  };

  if (!question) {
    return <NotFound />
  }

  if (
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser)
  ) {
    return <ResultsCard authorProfile={authorProfile} id={id} />;
  }

  return (
    <Paper className={classes.container}>
      <Avatar
        alt={authorProfile.name}
        src={authorProfile.avatarURL}
        className={classes.avatar}
      />
      <Typography align='center' variant='body2'>
        {authorProfile.name} asks
      </Typography>
      <Typography align='center' variant='h3'>
        Would you rather:
      </Typography>

      <div className={classes.innerContainer}>
        <form onSubmit={handleSubmit}>
          <Grid alignItems='center' justify='center' container>
            <Grid item>
              <Card className={classes.questionCard}>
                <CardContent>
                  <Typography variant='h4'>
                    {question.optionOne.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Fab
                    value='optionOne'
                    onClick={() => toggleSelection("optionOne")}
                    size='small'
                    color={colorOne}
                  >
                    <CheckCircleTwoToneIcon />
                  </Fab>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <div className='orBadge'>OR</div>
            </Grid>
            <Grid item>
              <Card className={classes.questionCard}>
                <CardContent>
                  <Typography variant='h4'>
                    {question.optionTwo.text}
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                  <Fab
                    value='optionTwo'
                    onClick={() => toggleSelection("optionTwo")}
                    size='small'
                    color={colorTwo}
                  >
                    <CheckCircleTwoToneIcon />
                  </Fab>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <div className='submit-container'>
            <Button onClick={handleSubmit} variant='contained' color='primary'>
              Choose
            </Button>
            <Button onClick={goHome} variant='contained' color='secondary'>
              Back to List
            </Button>
          </div>
        </form>
      </div>
    </Paper>
  );
};

function mapStateToProps({ authedUser, users, questions }, { match }) {

  return {
    authedUser,
    questions,
    users
    
  };
}

export default connect(mapStateToProps)(QuestionContainer);
