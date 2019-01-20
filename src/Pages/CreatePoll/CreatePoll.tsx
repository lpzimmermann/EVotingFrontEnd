import React from "react";
import {PageHeader, Panel} from "react-bootstrap";
import CreatePollForm from "../../Components/CreatePollForm/CreatePollForm";

class CreatePoll extends React.Component<() => {}, () => {}> {

    getPageHeader () {
        return (<PageHeader>
           Neue Abstimmung erfassen
        </PageHeader>);
    }

    submit(title: string, description: string, date: Date) {
        alert(title + ' - ' + description + ' - ' + date);
    }

    render() {
        return(
            <div>
            {this.getPageHeader()}
            <Panel className={'CreatePollPanel'}>
                <Panel.Body>
                     <CreatePollForm submit={this.submit.bind(this)}/>
                </Panel.Body>
            </Panel>
            </div>
        );
    }

}
export default CreatePoll;