// NPM
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Form, Text } from 'informed';
import styled from 'styled-components';

// COMPONENTS
import Button from '../../components/Button';

// ACTIONS/CONFIG
import { auth } from '../../firebase';
import Utils from '../../utils/Utils';

// STYLES

// MODULE
export default class LogIn extends Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormErrors = this.handleFormErrors.bind(this);
  }

  handleFormSubmit(form) {
    const { onError } = this.props;
    auth.signInWithEmailAndPassword(form.email, form.password).catch(error => {
      onError(error);
      this.formApi.reset();
    });
  }

  handleFormErrors(errors) {
    const { onError } = this.props;
    this.formApi.reset();
    onError(errors);
  }

  render() {
    return (
      <Form
        getApi={this.setFormApi}
        onSubmit={this.handleFormSubmit}
        onSubmitFailure={this.handleFormErrors}
      >
        <Text field="email" id="email" placeholder="Email" validate={Utils.validateEmail} />
        <Text
          field="password"
          id="password"
          type="password"
          placeholder="Password"
          validate={Utils.validatePassword}
        />
        <Button type="submit">Log in</Button>
      </Form>
    );
  }
}

// Props Validation
LogIn.propTypes = {};
