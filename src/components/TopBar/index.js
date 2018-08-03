// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

// COMPONENTS

// ACTIONS/CONFIG
import { signOutUser } from '../../actions/authActions';

// STYLES
const Wrap = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AButton = styled.button`
  font-size: inherit;
  font-family: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 10px;
`;

const { remote } = window.require('electron');

let win = remote.getCurrentWindow();

const resizeToggle = () => {
  const { width, height } = win.getBounds();
  // console.log(win, width, height);
  if (width > 300 && height > 350) {
    win.setSize(300, 350, true);
  } else {
    win.setSize(800, 800, true);
  }
};

// MODULE
const TopBar = ({ signOutUser }) => {
  return (
    <Wrap>
      <Action>
        <AButton
          onClick={() => {
            resizeToggle();
          }}
        >
          Resize
        </AButton>
      </Action>
      <Action>
        <AButton
          onClick={() => {
            signOutUser();
          }}
        >
          Sign out
        </AButton>
      </Action>
    </Wrap>
  );
};

// Props Validation
TopBar.propTypes = {};

export default connect(
  undefined,
  { signOutUser }
)(TopBar);
