import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    margin: '1rem'
  }
})

const QuestionLink = (props) => {
  const classes = useStyles()
  const { id, answered,  question, questionsList } = props;


  if (questionsList === 'questions' && answered) {
    return null;
  } else if (questionsList === 'answers' && !answered) {
    return null
  }

  

  return (
    <Link to={`/question/${id}`}>
      <Card className={classes.card}>
      
        <CardContent>
          <Typography className={classes.link} variant='h4'>{question.optionOne.text}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

function mapStateToProps({ authedUser, users, questions }, { id, questionsList }) {
  const question = questions[id];
  const answered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)

  return {
    question,
    id,
    answered,
    questionsList
  };
}

export default connect(mapStateToProps)(QuestionLink);
