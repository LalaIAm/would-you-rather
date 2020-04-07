import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import UserCard from "./UserCard";

const useStyles = makeStyles({
  container: {
    width: '100%'
  },
  list: {
    margin: 'auto',
    width: '100%'
  },
});

const LeaderBoard = (props) => {
  const classes = useStyles();
  const { scores } = props;

  

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        {scores.map((user, index) => {
          return <UserCard key={user.id} id={user.id} user={user} rank={index} />;
        })}
      </div>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    scores: Object.values(users)
      .map((user) => {
        const { questions, answers } = user;

        return {
          ...user,
          questionsAsked: questions.length,
          questionsAnswered: Object.keys(answers).length,
          total: Object.keys(answers).length + questions.length,
        };
      })
      .sort((a, b) => b.total - a.total),
  };
}

export default connect(mapStateToProps)(LeaderBoard);
