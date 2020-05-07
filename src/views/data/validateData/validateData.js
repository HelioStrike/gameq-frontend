import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { connect } from 'react-redux';

import Navigation from '../../../components/navigation/navigation';
import { getWaitingQuote, validateQuote } from '../../../store/actions/data';

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
    input: {
        width: '50ch',
    },
});

class ValidateData extends React.Component {

    constructor(props) {
        super(props);

        this.handleValidateQuote = this.handleValidateQuote.bind(this);

        this.props.getWaitingQuoteDispatch();
    }

    handleValidateQuote(vote) {
        this.props.validateQuoteDispatch({
            id: this.props.quote.id, 
            vote: vote
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Navigation/>
                            
                <Container className={classes.section}>
                    <Typography variant="h4">
                        Validate quote
                    </Typography>
                    
                    <Box m={4} />
    
                    <Container>
                        { (!this.props.quoteLoading && this.props.quote == null)? <Alert severity="error">Error retrieving quote...</Alert>:null }
                    </Container>

                    <Container>
                        { this.props.validateSuccess == true? <Alert severity="success">Quote validated. Thank you!</Alert>:null }
                        { this.props.validateSuccess == false? <Alert severity="error">Sorry, there was some error validating the quote...</Alert>:null }
                    </Container>

                    <Box m={2} />
                    
                    {
                        (!this.props.quoteLoading && this.props.quote)?
                        <div>
                            <Typography variant="h5">
                                <FormatQuoteIcon />
                                {this.props.quote? this.props.quote.quote:""}
                                <FormatQuoteIcon />
                            </Typography>
        
                            <Box m={2} />
        
                            <Typography className={`${classes.grey} ${classes.subheading}`}>
                                - {this.props.quote? this.props.quote.character:""}, {this.props.quote? this.props.quote.game:""}
                            </Typography>
                        </div>
                        : null    
                    }

                    {
                        this.props.quoteLoading? <CircularProgress />:null
                    }

                    <Box m={2} />
                    
                    <IconButton 
                    onClick={()=>{this.handleValidateQuote(1)}}
                    disabled={this.props.quoteLoading}>
                        <CheckCircleIcon fontSize="large" htmlColor="#00ff00" />
                    </IconButton>

                    <IconButton 
                    onClick={()=>{this.handleValidateQuote(-1)}}
                    disabled={this.props.quoteLoading}>
                        <CancelIcon fontSize="large" htmlColor="#ff0000" />
                    </IconButton>

                </Container>
    
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getWaitingQuoteDispatch: payload => dispatch(getWaitingQuote()),
    validateQuoteDispatch: payload => dispatch(validateQuote(payload.id, payload.vote)),
});

const mapStateToProps = state => ({
    quote: state.data.waitingQuote,
    quoteLoading: state.data.waitingQuoteLoading,
    validateSuccess: state.data.validateSuccess,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ValidateData));