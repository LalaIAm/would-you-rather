import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const QuestionLink = (props) => {
  const { question, id, authedUser } = props;

  if (question === null) {
    return <p>This question does not exist</p>;
  
  }

  if (
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser)
  ) {
    return null;
  }
  return (
    
      <Link to={`/question/${id}`}>
        <Typography variant='body1'>
          {question.optionOne.text} or {question.optionTwo.text}
        </Typography>
      </Link>
    
  );
};

function mapStateToProps({ questions, authedUser }, { id }) {
  const question = questions[id];
  return {
    question,
    id,
    authedUser
  };
}

export default connect(mapStateToProps)(QuestionLink);
