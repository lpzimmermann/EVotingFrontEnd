import {any} from "prop-types";
import React, { Component } from 'react';
import {Route, Router, StaticRouter, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import NavigationBar from "./Components/Navigation/NavigationBar";
import './App.css';
import CreatePoll from "./Pages/CreatePoll/CreatePoll";
import Polls from "./Pages/Polls/Polls";

class App extends Component {
  render() {
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
