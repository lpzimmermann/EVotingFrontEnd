import React from "react";
import {Button, Label, Panel} from "react-bootstrap";
import {AnswerType, PollType} from "../../Abstractions/Abstractions";

interface PollProps {
    title: string,
    description: string,
    due: string,
    vote: (answer: AnswerType) => void
}

class Poll extends React.Component<PollProps, () => {}> {

    /**
     * Renders this component
     * @returns {any}
     */
    render() {
        return(
        <Panel className={'Poll'}>
            <Panel.Body>
                <h1 className={'PollTitle'}>{this.props.title} </h1>
                <h4><Label className={'PollDate'} bsStyle={'info'}>{this.props.due}</Label></h4>
                <p>{this.props.description}</p>
                <Button type="submit" bsStyle={'success'} className={'VoteButton'} onClick={() => this.props.vote(AnswerType.Yes)}>JA</Button>
                <Button type="submit" bsStyle={'danger'} className={'VoteButton'} onClick={() => this.props.vote(AnswerType.No)}>NEIN</Button>
            </Panel.Body>
        </Panel>
        );
    }

}
export default Poll;