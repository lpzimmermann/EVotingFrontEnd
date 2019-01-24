import {string} from "prop-types";
import React from "react";
import {PageHeader, Panel} from "react-bootstrap";
import {Redirect} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {UserRequest} from "../../Abstractions/Abstractions";
import UserApiHandler from "../../Api/UserApiHandler";
import App from "../../App";
import LoginForm from "../../Components/LoginForm/LoginForm";

interface LoginPageProps {
    parent: App;
}

class LoginPage extends React.Component<LoginPageProps, () => {}> {

    /**
     * Creates a header for this page
     * @returns {any}
     */
    getPageHeader () {
        return (<PageHeader>
            Anmeldung
        </PageHeader>);
    }

    /**
     * Makes an API call to validate the given user data
     * @param {UserRequest} userRequest
     * @returns {Promise<void>}
     */
    async submit(userRequest: UserRequest) {
        var tempUser = await new UserApiHandler().validateUser(userRequest);

        if(tempUser !=  null) {
            localStorage.setItem('user', tempUser.passnummer);
            this.props.parent.forceUpdate();
        }
    }

    /**
     * Renders this component
     * @returns {any}
     */
    render() {

        if(localStorage.getItem('user') != null) {
            return(
                <BrowserRouter>
                    <Redirect to='/polls' />
                </BrowserRouter>
            );
        }

        return(
            <div>
                {this.getPageHeader()}
                <Panel className={'CreatePollPanel'}>
                    <Panel.Body>
                        <LoginForm submit={(req: UserRequest) => this.submit(req)}/>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }

}
export default LoginPage;