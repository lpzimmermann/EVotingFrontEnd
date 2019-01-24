import {AnswerType, Vote} from "../Abstractions/Abstractions";

class VoteApiHandler {

    /**
     * Makes an API call to place a Vote
     * @param {Vote} aVote
     */
    putVote(aVote: Vote) {

        var answer = 0;
        if(aVote.answer == AnswerType.No) {
            answer = 1;
        }

        fetch('http://localhost:5000/api/Votes', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({personId: aVote.userId, pollId: aVote.pollId, antwort: answer})
        })
    }

}
export default VoteApiHandler;