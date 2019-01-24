import {any} from "prop-types";
import React, { Component } from 'react';
import {Alert} from "react-bootstrap";
import {Route, Router, StaticRouter, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import NavigationBar from "./Components/Navigation/NavigationBar";
import './App.css';
import CreatePoll from "./Pages/CreatePoll/CreatePoll";
import LoginPage from "./Pages/Login/LoginPage";
import Polls from "./Pages/Polls/Polls";

class App extends Component {

    /**
     * Renders this component
     * @returns {any}
     */
  render() {

      if (localStorage.getItem('user') == null) {
          return <div className="App">
              <LoginPage parent={this}/>
          </div>;
      }

      return <div className="App">
          <NavigationBar/>

        <BrowserRouter>
          <Switch>
              <Route exact path='/polls' component={Polls}/>
              <Route exact path='/createPoll' component={CreatePoll}/>
          </Switch>
        </BrowserRouter>
      </div>
  }
}

export default App;
