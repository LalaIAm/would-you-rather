import React from 'react';
import { Card, Typography, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        margin: '1.5rem'
    }
})


const NotFound = ({ history }) => {
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} variant='h2'>404... that page is lost somewhere.</Typography>
                    <Button variant='contained' color='primary' onClick={() => history.push('/')}>Return Home</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default NotFound;