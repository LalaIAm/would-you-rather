import React from "react";
import { Card, Typography, Grid, Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        width: '50%',
        display: 'block',
        margin: 'auto',
        marginTop: '1.5rem'
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    total: {
        backgroundColor: 'primary'
    }
});

const UserCard = (props) => {
  const classes = useStyles();
  const {
    name,
    avatarURL,
    questionsAsked,
    questionsAnswered,
    total,
  } = props.user;
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
              <Grid container spacing={4} justify='center' alignItems='center'>
                  <Grid item>
                   <Typography variant='h2'>{props.rank + 1}</Typography>
                  </Grid>
          <Grid className={classes.item} item>
            <Avatar src={avatarURL} />
            <Typography variant='h5'>{name}</Typography>
          </Grid>
          <Grid className={classes.item} item>
            <Typography>Questions Answers: {questionsAnswered}</Typography>
            <Typography>Questions Asked: {questionsAsked}</Typography>
          </Grid>
          <Grid className={classes.item} item>
            <Typography variant='h3'>Total Score:</Typography>
            <div className='total'>{total}</div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

function mapStateToProps({ users }, { user, rank }) {
  return {
      user,
      rank
  };
}

export default connect(mapStateToProps)(UserCard);
