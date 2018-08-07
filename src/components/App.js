import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createHistory from "history/createBrowserHistory"

import firebase from '../firebase';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

class App extends Component {
    render() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('logged in user', user)
            } else {
                console.log('not logged in')
            }
        });

        return (
            <Router history={ createHistory() }>
                <div>
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/dashboard' component={Dashboard} />
                </div>

                {/* <React.Fragment>
                    <Signup />
                    <Login />
                    <button onClick={this.logout}>Logout</button>
                </React.Fragment> */}
            </Router>
        );
    }

    logout = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });
    }
}

export default App;
