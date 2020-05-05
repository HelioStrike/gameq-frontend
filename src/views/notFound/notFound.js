import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Navigation from '../../components/navigation/navigation';

const useStyles = makeStyles((theme) => ({
    body: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
    },
    section: {
        padding: '6vh',
    },
    imagecover: {
        width: '100%',
    },
    heading: {
        fontWeight: 700,
    },
    subheading: {
        fontWeight: 300,
    },
    grey: {
        color: '#757575',
    },
    input: {
        width: '50ch',
    }
}));

function NotFound() {
    const classes = useStyles();

    return (
        <div>
            <Navigation/>

            <Container className={classes.section}>
                <Typography variant="h1">
                    404
                </Typography>

                <Box m={2} />

                <Typography>
                    You seem lost... lets get you <Link href="/">back</Link>.
                </Typography>
            </Container>

        </div>
    );
}

export default NotFound;
