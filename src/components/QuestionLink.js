import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Avatar } from "@material-ui/core";
import { connect } from "react-redux";

const QuestionLink = (props) => {
  const [answered, setAnswered] = useState();
  const { id, authedUser, question, users, setQuestions } = props;

  if (
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser)
  ) {
    setAnswered(true);
  }

  if (answered === "true" && setQuestions === "false") {
    return <p>This is answered</p>;
  }

  return (
    <Link to={`/question/${id}`}>
      <Card>
        <CardContent>
          <Typography variant='h4'>{question.optionOne.text}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  

  return {
    question,
    id,
    users,
    
  };
}

export default connect(mapStateToProps)(QuestionLink);
