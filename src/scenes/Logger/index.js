// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import TopBar from '../../components/TopBar';

// ACTIONS/CONFIG
import { firestore, auth } from '../../firebase';

// STYLES
const Wrap = styled.div`
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  padding: 25px 0;
  font-size: 16px;
  opacity: 0.9;
`;

const moodTheme = {
  green: '#709E73',
  orange: '#B8E7D1',
  yellow: '#FBB959',
  red: '#FB865F'
};

const Moods = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Item = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  color: white;
  background: ${props => moodTheme[props.theme]};
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

// MODULE
export default class LoggerScene extends Component {
  constructor() {
    super();
    this.state = {
      submitted: false
    };

    this.handleMoodSubmittion = this.handleMoodSubmittion.bind(this);
  }

  handleMoodSubmittion(mood) {
    console.log('mood', mood);
    const timeSplit = new Date().toString().split(' ');

    const doc = firestore
      .collection('users')
      .doc(auth.currentUser.uid)
      .collection('moods')
      .doc();
    doc
      .set({
        mood,
        date: `${timeSplit[0]} ${timeSplit[1]} ${timeSplit[2]} ${timeSplit[3]}`,
        time: `${timeSplit[4]} ${timeSplit[5]} ${timeSplit[6]}`
      })
      .then(result => {
        console.log('scucess', result);
        this.setState({ submitted: true });
        this.clearSubmittionMessage();
      })
      .catch(error => {
        console.log('Error while creating', error);
      });
  }

  clearSubmittionMessage() {
    setTimeout(() => {
      this.setState({ submitted: false });
    }, 10000);
  }

  render() {
    const { submitted } = this.state;

    return (
      <Wrap>
        <TopBar />
        {submitted
          ? [
              <span key="1">All recorded now, my man!</span>,
              <span key="2">Come back later for next submittion.</span>
            ]
          : [
              <Title key="title">How is it going?</Title>,
              <Moods key="moods">
                <Item
                  theme="green"
                  onClick={() => {
                    this.handleMoodSubmittion('excellent');
                  }}
                >
                  Never Better
                </Item>
                <Item
                  theme="orange"
                  onClick={() => {
                    this.handleMoodSubmittion('good');
                  }}
                >
                  Decent
                </Item>
                <Item
                  theme="yellow"
                  onClick={() => {
                    this.handleMoodSubmittion('moody');
                  }}
                >
                  Could be better
                </Item>
                <Item
                  theme="red"
                  onClick={() => {
                    this.handleMoodSubmittion('bad');
                  }}
                >
                  Really?
                </Item>
              </Moods>
            ]}
      </Wrap>
    );
  }
}

// Props Validation
LoggerScene.propTypes = {};
