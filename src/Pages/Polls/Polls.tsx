import React from "react";
import {PageHeader} from "react-bootstrap";
import {AnswerType, PollType, Vote} from "../../Abstractions/Abstractions";
import PollApiHandler from "../../Api/PollApiHandler";
import VoteApiHandler from "../../Api/VoteApiHandler";
import Poll from "../../Components/Poll/Poll";

interface PollsState {
    polls: PollType[]
}

class Polls extends React.Component<() => {}, PollsState> {

    /**
     * Initializes this class
     * @param props
     */
    constructor(props: any){
        super(props);
        this.state = {polls: []}
        this.updatePolls();
    }

    /**
     * Makes an API call to place the vote
     * @param {string} aPollId
     * @param {string} anUserId
     * @param {AnswerType} anAnswer
     */
    vote(aPollId: string, anUserId: string, anAnswer: AnswerType) {
        new VoteApiHandler().putVote({pollId: aPollId, userId: anUserId, answer: anAnswer});
        this.updatePolls();
    }

    /**
     * Returns the user-id stored in the local storage
     * @returns {string}
     */
    getUserIdFromLocalStorage() {
            return '' + localStorage.getItem('user');
    }

    /**
     * Makes an API call to load the available polls for the logged in user
     * @returns {Promise<void>}
     */
    async updatePolls() {

        var polls = await new PollApiHandler().getPolls(this.getUserIdFromLocalStorage());

        if(polls != null){
          this.setState({polls: polls});
        }
    }

    /**
     * Renders this component
     * @returns {any}
     */
    render() {
        var polls = this.state.polls;
        var pollElements = [];
        for(let poll of polls) {
            pollElements.push(<Poll title={poll.title} description={poll.description} due={new Date(poll.date.toString()).toDateString()} vote={(anAnswer: AnswerType) => this.vote(poll.id, this.getUserIdFromLocalStorage(), anAnswer)}/>)
        }

        if(pollElements.length != 0){
            return(
                <div>
                    <PageHeader>
                        Verfügbare Abstimmungen
                    </PageHeader>

                    {pollElements}
                </div>
            );
        }
        else {
            return(
                <div>
                    <PageHeader>
                        Keine offenen Abstimmungen.
                    </PageHeader>
                </div>
            );
        }

    }



}
export default Polls;