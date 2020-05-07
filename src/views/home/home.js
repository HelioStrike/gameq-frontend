import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer/footer';
import Constants from '../../constants';
import { getRandomQuote } from '../../store/actions/data';

const useStyles = (theme) => ({
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
});

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.props.getQuoteDispatch();
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.body}>
                <Navigation/>
                            
                <Container className={classes.section}>
                    <Grid container spacing={3}>
                        <Grid item  container direction="column" alignItems="center" justify="center" xs={12}>
                            <Typography className={classes.heading} variant="h3">
                                GameQ API
                            </Typography>
                            <Box m={2} />
                            <Typography className={classes.subheading} variant="h5">
                                GraphQL API for video game quotes.
                            </Typography>
                            <Box m={2} />
                            <Box flexDirection="row">
                                <Button target="_blank" variant="contained" color="primary" href={Constants.PATHS.DOCS}>{Constants.SCREENS.DOCS}</Button>
                                <Box m={2} />
                                <Button variant="contained" color="primary" href={Constants.PATHS.APIKEY}>{Constants.SCREENS.APIKEY}</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Container className={classes.section}>
                    <Grid item  container direction="column">
                        <Typography variant="h4">
                            Check out some quotes!
                        </Typography>
                        <Box m={2} />
                        {
                            (!this.props.quoteLoading && this.props.quote)?
                            <div>
                                <Typography className={classes.subheading} variant="h6">
                                    <FormatQuoteIcon />
                                    {this.props.quote.text}
                                    <FormatQuoteIcon />
                                </Typography>
                                <Box m={1} />
                                <Typography className={classes.grey}>
                                    - {this.props.quote.character.name}, {this.props.quote.game.name}
                                </Typography>
                            </div>
                            :
                            <CircularProgress />
                        }
                        <Box m={2} />
                        <Box flexDirection="row">
                            <Button 
                            variant="contained" 
                            color="primary" 
                            disabled={this.props.quoteLoading}
                            onClick={this.props.getQuoteDispatch}>
                                Get another quote!
                            </Button>
                        </Box>
                    </Grid>
                </Container>

                <Footer />
            </div>
        );
    }
    /*
    return (
        <div className={classes.body}>
            <Navigation/>
                        
            <Container className={classes.section}>
                <Grid container spacing={3}>
                    <Grid item  container direction="column" alignItems="center" justify="center" xs={7}>
                        <Typography className={classes.heading} variant="h3">
                            GameQ API
                        </Typography>
                        <Box m={2} />
                        <Typography className={classes.subheading} variant="h5">
                            A free public GraphQL API for video game quotes.
                        </Typography>
                        <Box m={2} />
                        <Box flexDirection="row">
                            <Button variant="contained" color="primary" href={Constants.PATHS.DOCS}>{Constants.SCREENS.DOCS}</Button>
                            <Box m={2} />
                            <Button variant="contained" color="primary" href={Constants.PATHS.APIKEY}>{Constants.SCREENS.APIKEY}</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <img class={classes.imagecover} src="https://cdn.vox-cdn.com/thumbor/Yt1avchDkHqEqJuhYZ3YjKF3kFc=/0x0:1700x960/1200x675/filters:focal(714x344:986x616)/cdn.vox-cdn.com/uploads/chorus_image/image/57514059/mario.0.jpg" />
                    </Grid>             
                </Grid>
            </Container>

            <Container className={classes.section}>
                <Grid item  container direction="column">
                    <Typography variant="h4">
                        Check out some quotes!
                    </Typography>
                    <Box m={2} />
                    <Typography className={classes.subheading} variant="h6">
                        <FormatQuoteIcon />
                        If you can't walk, crawl.
                        <FormatQuoteIcon />
                    </Typography>
                    <Box m={1} />
                    <Typography className={classes.grey}>
                        - Darius, League of Legends
                    </Typography>
                    <Box m={2} />
                    <Box flexDirection="row">
                        <Button variant="contained" color="primary" href="/docs">Get another quote!</Button>
                    </Box>
                </Grid>
            </Container>

            <Footer />
        </div>
    );
    */
}

const mapDispatchToProps = dispatch => ({
    getQuoteDispatch: payload => dispatch(getRandomQuote()),
});

const mapStateToProps = state => ({
    quote: state.data.quote,
    quoteLoading: state.data.quoteLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Home));