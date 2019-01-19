import React from "react";
import {PageHeader, Panel} from "react-bootstrap";
import CreatePollForm from "../../Components/CreatePollForm/CreatePollForm";

class CreatePoll extends React.Component<() => {}, () => {}> {

    getPageHeader () {
        return (<PageHeader>
           Neue Abstimmung erfassen
        </PageHeader>);
    }

    render() {
        return(
            <div>
            {this.getPageHeader()}
            <Panel className={'CreatePollPanel'}>
                <Panel.Body>
                     <CreatePollForm/>
                </Panel.Body>
            </Panel>
            </div>
        );
    }

}
export default CreatePoll;