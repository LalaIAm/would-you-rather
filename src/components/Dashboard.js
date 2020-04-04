import React, { useState } from "react";
import { Grid, Switch, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QuestionContainer from "./QuestionContainer";
import { connect } from "react-redux";

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
              onChange={handleQAchange}
              name='questions'
              color='secondary'
            />
          </Grid>
          <Grid item>
            <Typography>Questions</Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.body}>
        {questionsSet && (
          <ul className='dashboard-list'>
            {props.questionIds.map((id) => (
              <li key={id}>
                <QuestionContainer id={id} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => (questions[b].timestamp = questions[a].timestap)
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
