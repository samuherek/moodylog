// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import SignUp from './SignUp';
import LogIn from './LogIn';

// ACTIONS/CONFIG

// STYLES
import FormStyles from '../../components/Form/styles';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  color: white;

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 15px;
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 25px;
`;

const ErrorWrap = styled.div`
  position: absolute;
  bottom: 10px;
`;

const Error = styled.div`
  display: block;
  background: red;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;

  &:not(:last-child):first-child {
    margin-bottom: 10px;
  }
`;

const AuthToggle = styled.span`
  display: block;
  margin-top: 25px;
  color: white;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

// MODULE
export default class AuthScene extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
      errors: null
    };

    this.errorTimeout = null;

    this.toggleLoginScene = this.toggleLoginScene.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.resetErrors = this.resetErrors.bind(this);
  }

  toggleLoginScene() {
    const { login } = this.state;
    this.setState({ login: !login });
  }

  resetErrors() {
    this.errorTimeout = setTimeout(() => {
      this.setState({ errors: null });
    }, 5000);
  }

  handleErrors(errors) {
    if (this.errorTimeout) clearTimeout(this.errorTimeout);

    this.setState({ errors });
    this.resetErrors();
  }

  render() {
    const { login } = this.state;

    return (
      <Wrap>
        <Title>{login ? 'Already a user' : 'First Sign Up'}</Title>
        <FormStyles>
          {login ? <LogIn onError={this.handleErrors} /> : <SignUp onError={this.handleErrors} />}
        </FormStyles>
        {/* <ErrorWrap>
          {emailError && <Error>EMAIL: {emailError}</Error>}
          {passwordError && <Error>PASSWORD: {passwordError}</Error>}
        </ErrorWrap> */}
        <AuthToggle onClick={this.toggleLoginScene}>{login ? 'Sign Up' : 'Log In'}</AuthToggle>
      </Wrap>
    );
  }
}

// Props Validation
AuthScene.propTypes = {};
