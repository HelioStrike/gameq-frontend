import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';

import Navigation from '../../components/navigation/navigation';
import Constants from '../../constants';
import { signup } from '../../store/actions/auth';

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

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            desc: '',
            email_error_text: '',
            desc_error_text: ''
        };

        this.handleSignup = this.handleSignup.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleSignup(event) {
        event.preventDefault();
        const email = this.state.email;
        const desc = this.state.desc;
        const email_error_text = validateEmail(email)? "":"Enter a valid email";
        const desc_error_text = (desc.length >= 5 && desc.length <= 200)? "":"Should be between 5 and 200 characters.";

        this.setState({
            email_error_text: email_error_text,
            desc_error_text: desc_error_text
        });

        if(email_error_text === "" && desc_error_text === "") {
            this.props.signupDispatch({
                email: this.state.email,
                desc: this.state.desc
            });
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Navigation/>
                            
                <Container className={classes.section}>
                    <Typography variant="h4">
                        Get API Key
                    </Typography>
                    
                    <Box m={2} />
    
                    <Typography className={classes.grey}>
                        Your email will only be used to send you your API key.
                    </Typography>
    
                    <Box m={2} />
    
                    <Container>
                        { this.props.mailSuccess == true? <Alert severity="success">Your API key has been sent!</Alert>:null }
                        { this.props.mailSuccess == false? <Alert severity="error">Sorry, some error has occured...</Alert>:null }
                    </Container>

                    <Box m={2} />

                    <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleSignup}>
                        <TextField 
                        className={classes.input} 
                        id="email" 
                        label="Email" 
                        name="email" 
                        value={this.state.email}
                        error={this.state.email_error_text !== ""}
                        helperText={this.state.email_error_text}
                        onChange={this.handleInputChange} />
                        <Box m={2} />
                        <TextField 
                        className={classes.input} 
                        id="desc" 
                        label="Usage Description" 
                        name="desc" 
                        value={this.state.desc}
                        error={this.state.desc_error_text !== ""}
                        helperText={this.state.desc_error_text}
                        onChange={this.handleInputChange} />
                        <Box m={4} />
                        <Box flexDirection="row">
                            <Button 
                            type="submit"
                            variant="contained" 
                            color="primary" 
                            disabled={this.props.signupLoading}>Sign Up</Button>
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
}

const mapDispatchToProps = dispatch => ({
    signupDispatch: payload => dispatch(signup(payload.email, payload.desc)),
});
  
const mapStateToProps = state => ({
    signupLoading: state.auth.signupLoading,
    mailSuccess: state.auth.mailSuccess,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SignUp));