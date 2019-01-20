import React from "react";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Panel} from "react-bootstrap";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface CreatePollFormState {
    title: string,
    description: string,
    date: Date,
}

interface CreatePollFormProps {
    submit: (title: string, description: string, date: Date) => void;
}

class CreatePollForm extends React.Component<CreatePollFormProps, CreatePollFormState> {

    constructor(props: any){
        super(props);
        this.state = ({title: '', description: '', date: new Date()});
    }

    validateAndSubmit() {
        this.props.submit(this.state.title, this.state.description, this.state.date);
        this.setState({title: '', description: '', date: new Date()});
    }

    handleChange(key: string, e: React.ChangeEvent<HTMLInputElement>) {
        let state = {} as any;
        state[key] = e.target.value;
        this.setState(state);
    }

    handleDateChange(date: Date) {
        this.setState({
            date: date
        });
    }

    render () {
        return(
            <form >
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
                        <DatePicker className={'form-control'} selected={this.state.date} dateFormat={'dd.MM.yyyy'} onChange={this.handleDateChange.bind(this)}/>
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