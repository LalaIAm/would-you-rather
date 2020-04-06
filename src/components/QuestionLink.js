import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Avatar } from "@material-ui/core";
import { connect } from "react-redux";

const QuestionLink = (props) => {
  
  const { id, answered, authedUser, question, users, questionsList } = props;


  if (questionsList === 'questions' && answered) {
    return null;
  } else if (questionsList === 'answers' && !answered) {
    return null
  }

  

  return (
    <Link to={`/question/${id}`}>
      <Card>
        {answered && (
          <p>answered</p>
        )}
        {!answered && (
          <p>No answe</p>
        )}
        <CardContent>
          <Typography variant='h4'>{question.optionOne.text}</Typography>
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
