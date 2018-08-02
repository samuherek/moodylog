// NPM
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Form, Text } from 'informed';
import styled from 'styled-components';
import passwordValidator from 'password-validator';
import validator from 'email-validator';

// COMPONENTS
// import Input from '../../components/Form/Input';
import Button from '../../components/Button';

// ACTIONS/CONFIG
import { auth } from '../../firebase';

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

const passwordSchema = new passwordValidator();
passwordSchema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits() // Must have digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(['Passw0rd', 'Password123']); // Blacklist these values

const validatePassword = password => {
  if (password) {
    return passwordSchema.validate(password) ? null : 'You do not have strong password';
  }
  return 'You must enter passowrd';
};

const validateEmail = email => {
  if (email) {
    return validator.validate(email) ? null : 'Email not in correct format';
  }
  return 'You must enter email';
};

// MODULE
export default class SignUp extends Component {
  state = {
    emailError: null,
    passwordError: null
  };

  timeout = null;

  handleFormSubmit = form => {
    console.log(form);
    auth.createUserWithEmailAndPassword(form.email, form.password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };

  handleFormErrors = errors => {
    this.setState({ emailError: errors.email || null, passwordError: errors.password || null });

    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.setState({ emailError: null, passwordError: null });
    }, 5000);
  };

  render() {
    const { emailError, passwordError } = this.state;

    return (
      <Wrap>
        <Title>First sign up!</Title>
        <FormStyles>
          <Form onSubmit={this.handleFormSubmit} onSubmitFailure={this.handleFormErrors}>
            <Text field="email" id="email" placeholder="Email" validate={validateEmail} />
            <Text
              field="password"
              id="password"
              type="password"
              placeholder="Password"
              validate={validatePassword}
            />
            <Button type="submit">Sign up</Button>
          </Form>
        </FormStyles>
        <ErrorWrap>
          {emailError && <Error>EMAIL: {emailError}</Error>}
          {passwordError && <Error>PASSWORD: {passwordError}</Error>}
        </ErrorWrap>
      </Wrap>
    );
  }
}

// Props Validation
SignUp.propTypes = {};
