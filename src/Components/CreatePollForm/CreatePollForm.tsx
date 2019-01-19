import React from "react";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Panel} from "react-bootstrap";

interface CreatePollFormState {
    title: string,
    description: string,
    date: string;
}

class CreatePollForm extends React.Component<() => {}, CreatePollFormState> {

    constructor(props: any){
        super(props);
        this.state = ({title: '', description: '', date: ''});
    }

    render () {
        return(
            <form>
                <FormGroup controlId="FormTitle">
                    <Col componentClass={ControlLabel} sm={2}>
                        Titel:
                    </Col>
                    <Col sm={10} className={'FormRow'}>
                        <FormControl type="text" placeholder="Hornkuh-Initiative"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="FormDescription">
                    <Col componentClass={ControlLabel} sm={2}>
                        Beschreibung:
                    </Col>
                    <Col sm={10} className={'FormRow TextArea'}>
                        <FormControl componentClass="textarea" placeholder="Die Folgen dieser Initialive wären..." value={this.state.description}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="FormDate">
                    <Col componentClass={ControlLabel} sm={2}>
                        Datum:
                    </Col>
                    <Col sm={10} className={'FormRow'}>

                    </Col>
                </FormGroup>
                <Button type="submit">Erstellen</Button>
            </form>
        );
    }

}
export default CreatePollForm;