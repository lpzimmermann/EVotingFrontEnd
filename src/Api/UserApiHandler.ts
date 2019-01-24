import {UserRequest} from "../Abstractions/Abstractions";

class UserApiHandler {

    /**
     * Makes an API call to validate the user and, if the user is valid, returns its object
     * @param {UserRequest} userRequest
     * @returns {Promise<Response>}
     */
    validateUser(userRequest: UserRequest) {

       return fetch('http://localhost:5000/api/Validate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({passnummer: userRequest.id, geburtsdatum: userRequest.birthday.toUTCString()})
        }).then(res => {
            if(!res.ok) {
                return null;
            }
            return res.json()
        });

    }

}
export default UserApiHandler;