import {AnswerType, CreatePollType, PollType} from "../Abstractions/Abstractions";
import Poll from "../Components/Poll/Poll";

class PollApiHandler {

    /**
     * Fetches all polls from the API
     * @param {string} userId
     * @returns {Promise<Response>}
     */
     getPolls(userId: string) {
       return fetch("http://localhost:5000/api/Polls/person/"+userId, {method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'}})
            .then(response => {
            if (!response.ok) {
                console.log("Invalid response!");
                return null;
            }
            return response.json();
            });
    }

    /**
     * Makes an API call to add a new Poll
     * @param {CreatePollType} aCreatePoll
     */
    putPoll(aCreatePoll: CreatePollType) {
        fetch('http://localhost:5000/api/Polls', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: aCreatePoll.title, description: aCreatePoll.description, pollDate: aCreatePoll.due})
        })
    }

}
export default PollApiHandler;