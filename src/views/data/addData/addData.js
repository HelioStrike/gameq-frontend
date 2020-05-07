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

import Navigation from '../../../components/navigation/navigation';
import Constants from '../../../constants';
import { addData } from '../../../store/actions/data';

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

class AddData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            game: '', 
            character: '', 
            quote: '',
            game_error_text: '',
            character_error_text: '',
            quote_error_text: ''
        };

        this.handleAddData = this.handleAddData.bind(this);
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

    resetForm() {
        this.setState({
            game: '',
            character: '',
            quote: ''
        });
    }

    handleAddData(event) {
        event.preventDefault();
        const game = this.state.game;
        const character = this.state.character;
        const quote = this.state.quote;
        const game_error_text = (game && game !== "")? "":"Game should not be empty";
        const character_error_text = (character && character !== "")? "":"Character should not be empty";
        const quote_error_text = (quote && quote !== "")? "":"Quote should not be empty";

        this.setState({
            game_error_text: game_error_text,
            character_error_text: character_error_text,
            quote_error_text: quote_error_text
        });

        if(game_error_text === "" && character_error_text === "" && quote_error_text === "") {
            this.props.addDataDispatch({
                game: this.state.game,
                character: this.state.character,
                quote: this.state.quote,
            })
            .then(() => {
                if(this.props.addDataSuccess) this.resetForm(); 
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
                        Add quote
                    </Typography>
                    
                    <Box m={2} />
    
                    <Container>
                        { this.props.addDataSuccess == true? <Alert severity="success">Quote added. Thank you!</Alert>:null }
                        { this.props.addDataSuccess == false? <Alert severity="error">Sorry, some error has occured...</Alert>:null }
                    </Container>

                    <Box m={2} />

                    <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleAddData}>
                        <TextField 
                        className={classes.input} 
                        id="game" 
                        label="Game" 
                        name="game" 
                        value={this.state.game}
                        error={this.state.game_error_text !== ""}
                        helperText={this.state.game_error_text}
                        onChange={this.handleInputChange} />
                        <Box m={2} />
                        <TextField 
                        className={classes.input} 
                        id="character" 
                        label="Character" 
                        name="character" 
                        value={this.state.character}
                        error={this.state.character_error_text !== ""}
                        helperText={this.state.character_error_text}
                        onChange={this.handleInputChange} />
                        <Box m={2} />
                        <TextField 
                        className={classes.input} 
                        id="quote" 
                        label="Quote" 
                        name="quote" 
                        value={this.state.quote}
                        error={this.state.quote_error_text !== ""}
                        helperText={this.state.quote_error_text}
                        onChange={this.handleInputChange} />
                        <Box m={4} />
                        <Box flexDirection="row">
                            <Button 
                            type="submit"
                            variant="contained" 
                            color="primary" 
                            disabled={this.props.addDataLoading}>Add quote</Button>
                        </Box>
                    </form>    
                </Container>
    
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addDataDispatch: payload => dispatch(addData(payload.game, payload.character, payload.quote)),
});

const mapStateToProps = state => ({
    addDataLoading: state.data.addDataLoading,
    addDataSuccess: state.data.addDataSuccess
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(AddData));