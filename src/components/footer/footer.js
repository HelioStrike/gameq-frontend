import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

import Constants from '../../constants';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: '4vh',
    },
    footer: {
        backgroundColor: '#EEEEEE',
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.section + ' ' + classes.footer}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item  container direction="column" alignItems="center" justify="center" xs={4}>
                        <Link target="_blank" href={Constants.PATHS.DOCS}>{Constants.SCREENS.DOCS}</Link>
                        <Link href={Constants.PATHS.CONTRIBUTE}>{Constants.SCREENS.CONTRIBUTE}</Link>
                        <Link href={Constants.PATHS.APIKEY}>{Constants.SCREENS.APIKEY}</Link>
                    </Grid>
                    <Grid item  container direction="column" alignItems="center" justify="center" xs={4}>
                        <Link href={Constants.PATHS.TNC}>{Constants.SCREENS.TNC}</Link>
                        <Link href={Constants.PATHS.PRIVACYPOLICY}>{Constants.SCREENS.PRIVACYPOLICY}</Link>
                    </Grid>
                    <Grid item  container direction="column" alignItems="center" justify="center" xs={4}>
                        <Typography className={classes.subheading}>
                            Made by 
                        </Typography>                            
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Footer;