import {request} from "http";
import React from "react";
import {Alert, Button, Col, ControlLabel, Form, FormControl, FormGroup, Panel} from "react-bootstrap";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {CreatePollType, PollType} from "../../Abstractions/Abstractions";


interface CreatePollFormProps {
    submit: (aCreatePoll: CreatePollType) => void,
    updateOnFailed: () => void,
    failed: boolean,
    success: boolean
}

class CreatePollForm extends React.Component<CreatePollFormProps, CreatePollType> {

    /**
     * Initializes this class
     * @param props
     */
    constructor(props: any){
        super(props);
        this.state = ({title: '', description: '', due: new Date()});
    }

    /**
     * Validates the form data and calls a method in the parent component for making the API call
     */
    validateAndSubmit() {
        if(this.state.title.length > 0 && this.state.description.length > 0 && this.state.due != null) {
            this.props.submit(this.state);
            this.setState({title: '', description: '', due: new Date()});
        }
        else{
            this.props.updateOnFailed();
            this.forceUpdate();
        }
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
     * Handles changes in form data (Date)
     * @param {Date} date
     */
    handleDateChange(date: Date) {
        this.setState({
            due: date
        });
    }

    /**
     * Renders this component
     * @returns {any}
     */
    render () {

        var titleValidationState: "error" | null = (this.state.title.length == 0 ? "error" : null);
        var descriptionValidationState: "error" | null = (this.state.description.length == 0 ? "error" : null);
        var dateValidationState: "error" | null = (this.state.due == null ? "error" : null);

        console.log(titleValidationState + ' - ' + descriptionValidationState + ' - ' + dateValidationState);

        return(
            <form >
                <Alert className={'error-show-'+this.props.failed} bsStyle={'danger'}>
                    <h5>Bitte alle Werte befüllen!</h5>
                </Alert>
                <Alert className={'error-show-'+this.props.success} bsStyle={'success'}>
                    <h5>Abstimmung wurde erfolgreich hinzugefügt.</h5>
                </Alert>
                <FormGroup controlId="FormTitle">
                    <Col componentClass={ControlLabel} sm={2}>
                        Titel:
                    </Col>
                    <Col sm={10} className={'FormRow'}>
                        <FormControl type="text" placeholder="Hornkuh-Initiative" value={this.state.title} onChange={(event) => this.handleChange('title', event as any)}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="FormDescription">
                    <Col componentClass={ControlLabel} sm={2}>
                        Beschreibung:
                    </Col>
                    <Col sm={10} className={'FormRow TextArea'}>
                        <FormControl componentClass="textarea" placeholder="Die Folgen dieser Initialive wären..." value={this.state.description} onChange={(event) => this.handleChange('description', event as any)}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="FormDate">
                    <Col componentClass={ControlLabel} sm={2}>
                        Datum:
                    </Col>
                    <Col sm={5} className={'FormRow align-left'}>
                        <DatePicker className={'form-control'} selected={this.state.due} dateFormat={'dd.MM.yyyy'} onChange={this.handleDateChange.bind(this)}/>
                    </Col>
                    <Col sm={5} className={'FormRow align-right'} >
                        <Button onClick={this.validateAndSubmit.bind(this)}>Abstimmung Erstellen</Button>
                    </Col>
                </FormGroup>

            </form>
        );
    }

}
export default CreatePollForm;