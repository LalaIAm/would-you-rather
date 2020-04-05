import React from "react";
import { Paper, Typography, Grid, CardContent, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
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
}));

const ResultsCard = (props) => {
  const classes = useStyles();

  const formatOption = (option) => {
    if (option.length === 1) {
      return `${option} vote`;
    } else {
      return `${option} votes`;
    }
  };

  const handlePercent = () => {
    const { optionOne, optionTwo } = props;
    let totalVotes = optionOne.votes.length + optionTwo.votes.length;
    let votePercentOne = Math.floor((optionOne.length / totalVotes) * 100);
    let votePercentTwo = Math.floor((optionTwo.length / totalVotes) * 100);
    return votePercentOne, votePercentTwo;
  };

  const { question } = props;

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
            </Card>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

function mapStateToProps({ authedUser, questions, users }, id) {
  
  const question = questions[id];

  return {
    question,
    authedUser,
  };
}

export default connect(mapStateToProps)(ResultsCard);
