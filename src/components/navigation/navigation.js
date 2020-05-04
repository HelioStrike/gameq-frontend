import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

import Constants from '../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    spacer: {
        flexGrow: 1,
    },
    button: {
        marginLeft: 10,
    }
}));

export default function Navigation() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5">
                        <Link href="/" color="inherit">
                            GameQ API
                        </Link>
                    </Typography>
                    <div className={classes.spacer}></div>
                    <IconButton href="https://github.com/HelioStrike/gameq-api">
                        <GitHubIcon htmlColor="#ffffff" />
                    </IconButton>
                    <Button className={classes.button} color="inherit" href={Constants.PATHS.DOCS}>{Constants.SCREENS.DOCS}</Button>
                    <Button className={classes.button} color="inherit" href={Constants.PATHS.CONTRIBUTE}>{Constants.SCREENS.CONTRIBUTE}</Button>
                    <Button className={classes.button} color="inherit" href={Constants.PATHS.APIKEY}>{Constants.SCREENS.APIKEY}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}