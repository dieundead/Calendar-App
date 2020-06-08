import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import ScrollToTop from "../../components/scrolltotop/scrolltotop";

import CalendarPage from "../calendar-page";
import EnterPage from "../enter-page";
import SettingsPage from "../settings-page";
import EventsPage from "../events-page";
import RestorePage from "../restore-page/restore-page";
import RegisterPage from "../register-page/register-page";

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyBBc9uuv0j5FMkayVo0__XV09G9A8SDBe8",
  authDomain: "calendar-app-b363d.firebaseapp.com",
  databaseURL: "calendar-app-b363d.firebaseio.com",
  storageBucket: "calendar-app-b363d.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends Component {

  render() {

    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={CalendarPage} />
            <Route path="/enter" exact component={EnterPage} />
            <Route path="/events" exact component={EventsPage} />
            <Route path="/settings" exact component={SettingsPage} />
            <Route path="/forget" exact component={RestorePage} />
            <Route path="/register" exact component={RegisterPage}/>

            <Route component={CalendarPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
