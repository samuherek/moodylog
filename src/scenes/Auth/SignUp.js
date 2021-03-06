// NPM
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Text } from 'informed';

// COMPONENTS
import Button from '../../components/Button';

// ACTIONS/CONFIG
import { createNewUser } from '../../actions/authActions';
import Utils from '../../utils/Utils';

// STYLES

// MODULE
class SignUp extends Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormErrors = this.handleFormErrors.bind(this);
  }

  handleFormSubmit(form) {
    const { onError } = this.props;
    const { email, password } = form;

    createNewUser(email, password).catch(error => {
      onError({ signUp: `${error.code} ${error.message}` });
      console.log(error.code, error.message);
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
        <Button type="submit">Sign up</Button>
      </Form>
    );
  }
}

// Props Validation
SignUp.propTypes = {};

export default connect(
  undefined,
  { createNewUser }
)(SignUp);
