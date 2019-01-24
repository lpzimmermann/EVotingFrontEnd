import React from "react";
import {Alert, Button, Col, ControlLabel, Form, FormControl, FormGroup, Panel} from "react-bootstrap";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {UserRequest} from "../../Abstractions/Abstractions";

interface LoginFormProps {
    submit: (userRequest: UserRequest) => void;
}

interface LoginFormState {
    id: string,
    birthday: Date,
    requestFailed:boolean;
}

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {

    /**
     * Initializes this class
     * @param props
     */
    constructor(props: any){
        super(props);
        this.state = ({id: '', birthday: new Date(),
                        requestFailed: false});
    }

    /**
     * Calls a method of the parent component to submit the login data
     * @returns {Promise<void>}
     */
    async validateAndSubmit() {
        await this.props.submit(this.state);
        this.setState({id: '', birthday: new Date(),
                        requestFailed: true});
    }

    /**
     * Handles changes in form data
     * @param {string} key
     * @param {React.ChangeEvent<HTMLInputElement>} e
     */
    handleChange(key: string, e: React.ChangeEvent<HTMLInputElement>) {
        let state = {} as any;
        state[key] = e.target.value;
        this.setState(state);
    }

    /**
     * Handles changes in form data (for Date)
     * @param {Date} date
     */
    handleDateChange(date: Date) {
        this.setState({
            birthday: date
        });
    }

    /**
     * Renders this component
     * @returns {any}
     */
    render () {
        return(
            <form>
                <Alert className={'error-show-'+this.state.requestFailed} bsStyle={'danger'}>
                    <h5>Passnummer und Geburtsdatum stimmen nicht überein!</h5>
                </Alert>
                <FormGroup controlId="FormTitle">
                    <Col componentClass={ControlLabel} sm={3}>
                        Passnummer:
                    </Col>
                    <Col sm={9} className={'FormRow'}>
                        <FormControl type="text" placeholder="1e9sb-e8nb2-3333" value={this.state.id} onChange={(event) => this.handleChange('id', event as any)}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="FormDate">
                    <Col componentClass={ControlLabel} sm={3}>
                        Geburtsdatum:
                    </Col>
                    <Col sm={4} className={'FormRow align-left'}>
                        <DatePicker className={'form-control'} selected={this.state.birthday} dateFormat={'dd.MM.yyyy'} onChange={this.handleDateChange.bind(this)}/>
                    </Col>
                    <Col sm={5} className={'FormRow align-right'} >
                        <Button onClick={this.validateAndSubmit.bind(this)}>Daten prüfen</Button>
                    </Col>
                </FormGroup>

            </form>
        );
    }

}
export default LoginForm;