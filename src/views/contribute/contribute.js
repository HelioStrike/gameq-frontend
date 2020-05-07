import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

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

function Contribute() {
    const classes = useStyles();

    return (
        <div>
            <Navigation/>

            <Container className={classes.section}>
                <Typography variant="h4">
                    Contribute to the project
                </Typography>

                <Box m={4} />

                <Grid container spacing={3}>
                    <Grid item  container direction="column" alignItems="center" justify="center" xs={12}>
                        <Typography className={classes.subheading} variant="h5">
                            If you have any video game quotes you know of, considering adding it. You can also help by validating waiting quotes.
                        </Typography>
                        <Box m={2} />

                        <Button variant="contained" color="primary" target="_blank" href={Constants.PATHS.ADDDATA}>{Constants.SCREENS.ADDDATA}</Button>
                        <Box m={1} />
                        <Button variant="contained" color="primary" target="_blank" href={Constants.PATHS.VALIDATEDATA}>{Constants.SCREENS.VALIDATEDATA}</Button>
                    </Grid>          
                </Grid>

                <Box m={4} />

                <Grid container spacing={3}>
                    <Grid item  container direction="column" alignItems="center" justify="center" xs={12}>
                        <Typography className={classes.subheading} variant="h5">
                            Have programming skills and looking for an open-source project to contribute to? Right this way!
                        </Typography>
                        <Box m={2} />
                        <Button variant="contained" color="primary" target="_blank" href={Constants.PATHS.GITHUB}>{Constants.SCREENS.GITHUB}</Button>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );

    /*
    return (
        <div>
            <Navigation/>

            <Container className={classes.section}>
                <Typography variant="h4">
                    Contribute to the project
                </Typography>

                <Grid container spacing={3}>
                    <Grid item  container direction="column" alignItems="center" justify="center" xs={7}>
                        <Typography className={classes.subheading} variant="h5">
                            If you have any video game quotes you know of, considering adding it. You can also help by validating waiting quotes.
                        </Typography>
                        <Box m={2} />

                        <Button variant="contained" color="primary" target="_blank" href={Constants.PATHS.ADDDATA}>{Constants.SCREENS.ADDDATA}</Button>
                        <Box m={1} />
                        <Button variant="contained" color="primary" target="_blank" href={Constants.PATHS.VALIDATEDATA}>{Constants.SCREENS.VALIDATEDATA}</Button>
                    </Grid>
                    <Grid item xs={5}>
                        <img class={classes.imagecover} src="https://cdn.vox-cdn.com/thumbor/Yt1avchDkHqEqJuhYZ3YjKF3kFc=/0x0:1700x960/1200x675/filters:focal(714x344:986x616)/cdn.vox-cdn.com/uploads/chorus_image/image/57514059/mario.0.jpg" />
                    </Grid>             
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <img class={classes.imagecover} src="https://cdn.vox-cdn.com/thumbor/Yt1avchDkHqEqJuhYZ3YjKF3kFc=/0x0:1700x960/1200x675/filters:focal(714x344:986x616)/cdn.vox-cdn.com/uploads/chorus_image/image/57514059/mario.0.jpg" />
                    </Grid>             
                    <Grid item  container direction="column" alignItems="center" justify="center" xs={7}>
                        <Typography className={classes.subheading} variant="h5">
                            Have programming skills and looking for an open-source project to contribute to? Right this way!
                        </Typography>
                        <Box m={2} />
                        <Button variant="contained" color="primary" target="_blank" href={Constants.PATHS.GITHUB}>{Constants.SCREENS.GITHUB}</Button>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
    */
}

export default Contribute;
