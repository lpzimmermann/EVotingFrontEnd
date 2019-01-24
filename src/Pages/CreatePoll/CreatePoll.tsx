import React from "react";
import {PageHeader, Panel} from "react-bootstrap";
import {CreatePollType} from "../../Abstractions/Abstractions";
import PollApiHandler from "../../Api/PollApiHandler";
import CreatePollForm from "../../Components/CreatePollForm/CreatePollForm";

interface CreatePollState {
    failed: boolean,
    success: boolean
}

class CreatePoll extends React.Component<() => {}, CreatePollState> {

    /**
     * Initializes this class
     * @param props
     */
    constructor(props: any) {
        super(props);
        this.state = {failed: false, success: false};
    }

    /**
     * Creates a header for this page
     * @returns {any}
     */
    getPageHeader () {
        return (<PageHeader>
           Neue Abstimmung erfassen
        </PageHeader>);
    }

    /**
     * Makes an API call to create a new Poll
     * @param {CreatePollType} aCreatePoll
     */
    submit(aCreatePoll: CreatePollType) {
        if(aCreatePoll.title != '' && aCreatePoll.description != null && aCreatePoll.due != null) {
            new PollApiHandler().putPoll(aCreatePoll);
            this.setState({failed: false, success: true});
            this.forceUpdate();
        }
        else {
            this.updateFailedState();
        }
    }

    /**
     * Updates the state if the creation of a poll failed
     */
    updateFailedState() {
        this.setState({failed: true, success: false});
        this.forceUpdate();
    }

    /**
     * Renders this component
     * @returns {any}
     */
    render() {
        return(
            <div>
            {this.getPageHeader()}
            <Panel className={'CreatePollPanel'}>
                <Panel.Body>
                     <CreatePollForm failed={this.state.failed} success={this.state.success} updateOnFailed={this.updateFailedState.bind(this)} submit={this.submit.bind(this)}/>
                </Panel.Body>
            </Panel>
            </div>
        );
    }

}
export default CreatePoll;