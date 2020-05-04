import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import Navigation from '../../components/navigation/navigation';
import Constants from '../../constants';

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

function SignUp() {
    const classes = useStyles();

    return (
        <div>
            <Navigation/>
                        
            <Container className={classes.section}>
                <Typography variant="h4">
                    Get API Key
                </Typography>
                
                <Box m={2} />

                <Typography className={classes.grey} variant="p">
                    Your email will only be used to send you your API key.
                </Typography>

                <Box m={2} />

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField className={classes.input} id="email" label="Email" />
                    <Box m={2} />
                    <TextField className={classes.input} id="usage" label="How would you like to you the API?" />
                    <Box m={4} />
                    <Box flexDirection="row">
                        <Button variant="contained" color="primary" href="/docs">Sign Up</Button>
                    </Box>
                </form>
                <Box m={4} />
                <Box flexDirection="row">
                    <Link href={Constants.PATHS.TNC}>{Constants.SCREENS.TNC}</Link> | <Link href={Constants.PATHS.PRIVACYPOLICY}>{Constants.SCREENS.PRIVACYPOLICY}</Link>
                </Box>

            </Container>

        </div>
    );
}

export default SignUp;