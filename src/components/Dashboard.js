import React, { useState } from "react";
import { Grid, Switch, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QuestionContainer from "./QuestionContainer";
import { connect } from "react-redux";
import QuestionLink from "./QuestionLink";

import Login from './Login';

const useStyles = makeStyles((theme) => ({
  toggleBar: {
    margin: "auto",
    position: "relative",
    marginTop: theme.spacing(3),
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const [questionsSet, setQuestions] = useState(true);

  const handleQAchange = (event) => {
    const isQuestions = questionsSet === true ? false : true;
    setQuestions(isQuestions);
  };

  const { questionIds, authedUser, questions } = props;

  const renderList = () => {
    if (questionsSet) {
      return 'questions';
    } else {
      return 'answers'
    }
  }

  

  return (
    <div className='dashboard'>
      
      <div className={classes.toggleBar}>
        <Grid component='label' container alignItems='center' spacing={1}>
          <Grid item>
            <Typography>Answers</Typography>
          </Grid>
          <Grid item>
            <Switch
              checked={questionsSet}
              onChange={() => handleQAchange()}
              name='questions'
              color='secondary'
            />
          </Grid>
          <Grid item>
            <Typography>Questions</Typography>
          </Grid>
        </Grid>
      </div>
      <Login />
      <div className={classes.body}>
      
          <ul className='dashboard-list'>
            {props.questionIds.map((id) => (
              <li key={id}>
                <QuestionLink questionsList={renderList()} id={id} />
              </li>
            ))}
          </ul>
        
      </div>
    </div>
  );
};

function mapStateToProps({ questions, authedUser, users }) {
  
  
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => (questions[b].timestamp = questions[a].timestap)
    ),
    questions,
    authedUser,
    
  };
}

export default connect(mapStateToProps)(Dashboard);
