import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class Register extends React.Component {  // eslint-disable-line react/prefer-stateless-function
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <form action="/quiz">
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Entrez votre numéro de vestiaire</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="N° vestiaire"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <Button type="submit" >valider</Button>
                </FormGroup>
            </form>
        );
  }
}
