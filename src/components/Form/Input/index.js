// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS

// ACTIONS/CONFIG

// STYLES
const InputField = styled.input`
  font-family: inherit;
  font-size: inherit;
  background: transparent;
  border: 2px solid #dfe1e6;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  padding: 10px 15px;

  margin-bottom: 15px;
`;

// MODULE
export default function Input({ value, onChange, type, placeholder }) {
  return <InputField type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}

// Props Validation
Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  placeholder: ''
};
