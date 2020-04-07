import React from "react";
import { Card, Typography, CardContent, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: "1.5rem",
  },
});

const NotFound = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant='h2'>
            404... that page is lost somewhere.
          </Typography>
          <Button variant='contained' color='primary' to='/' component={Link}>
            Return Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
