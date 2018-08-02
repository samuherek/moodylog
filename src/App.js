import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import globals from './styles/global';

// const { ipcRenderer } = window.require('electron');

// const { app } = window.require('electron').remote;
// COMPONENTS
import SignUp from './scenes/Auth/SignUp';
import Logger from './scenes/Logger';

// ACTIONS/CONFIG
import { uidKey } from './firebase';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;

    if (isAuthenticated || localStorage.getItem(uidKey)) {
      return (
        <Switch>
          <Route path="/" component={Logger} />
        </Switch>
      );
    }

    return <SignUp />;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.uid
  };
};

export default connect(mapStateToProps)(App);
