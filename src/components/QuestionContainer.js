import React from "react";
import {
  Card,
  Typography,
  Paper,
  Grid,
  CardContent,
  Fab,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import StarsTwoToneIcon from "@material-ui/icons/StarsTwoTone";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  actions: {
    textAlign: 'center',
    margin: 'auto',
  },
  questionCard: {
    background: "#b6dbf2",
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
}));

const QuestionContainer = (props) => {
  const classes = useStyles();

  const { question, authUser } = props;

  if (question === null) {
    return <p>This question does not exist</p>;
  }

  if (
    question.optionOne.votes.includes(authUser) ||
    question.optionTwo.votes.includes(authUser)
  ) {
    return null;
  }

  return (
    <Paper className={classes.container}>
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
              <CardContent>
                <Typography variant='h4'>{question.optionOne.text}</Typography>
              </CardContent>
              <CardActions>
                <Fab size='small' color='primary'>
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
                <Typography variant='h4'>{question.optionTwo.text}</Typography>
              </CardContent>
              <CardActions className={classes.actions}>
                <Fab size='small' color='primary'>
                  <CheckCircleTwoToneIcon />
                </Fab>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

function mapStateToProps({ authUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authUser,
    question,
  };
}

export default connect(mapStateToProps)(QuestionContainer);
