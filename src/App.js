import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { isAuthenticated } from './firebase';

// const { ipcRenderer } = window.require('electron');

// const { app } = window.require('electron').remote;

class App extends Component {
  componentDidMount() {
    // let n = new Notification('You did it!', {
    //   body: 'Nice work.'
    // });
    // console.log(n);
    // n.onclick = () => {
    //   ipcRenderer.send('show-window');
    // };
  }

  render() {
    if (!isAuthenticated()) {
      return <div>SIgn up first</div>;
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Reacton + Electron ={' '}
            <span role="img" aria-label="love">
              😍
            </span>
          </h2>
        </div>
        <p className="App-intro">
          <b> Release 0.2.7 </b>
        </p>
      </div>
    );
  }
}

export default App;
