// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// COMPONENTS
// import { PlusIcon, BackArrow, EditIcon } from '../icons';

// ACTIONS/CONFIG

// STYLES
const size = {
  text: {
    padding: '0',
    fontSize: '16px',
    iconSize: '12px'
  },
  small: {
    padding: '4px 10px',
    fontSize: '14px',
    iconSize: '12px'
  },
  medium: {
    padding: '6px 14px',
    fontSize: '16px',
    iconSize: '14px'
  }
};

const colors = {
  blue: '#0D56C9',
  blueActive: '#0D56C9',
  white: '#fff',
  gray: '#d3d7dc',
  lightGray: '#f9fafc',
  lightGrayActive: '#e8e9ee'
};

const theme = {
  mainFilled: {
    background: colors.blue,
    backgroundHover: colors.blueActive,
    border: colors.blue,
    borderHover: colors.blue,
    color: colors.white,
    colorHover: colors.white
  },
  secondary: {
    background: colors.lightGray,
    backgroundHover: colors.lightGrayActive,
    border: colors.lightGray,
    borderHover: colors.lightGrayActive,
    color: '#42526e',
    colorHover: '#42526e'
  }
};

const Wrap = styled.div`
  display: inline-block;

  > button,
  > a {
    font-family: inherit;
    background: ${props => theme[props.theme].background};
    border-radius: ${props => (props.round ? '25px' : '3px')};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${props => (props.disabled ? '0.75' : '1')};
    display: inline-block;
    font-size: ${props => (props.size ? size[props.size].fontSize : 'inherit')};
    height: auto;
    overflow: hidden;
    padding: ${props => (props.size ? size[props.size].padding : '0')};
    text-align: ${props => props.align};
    transition: all 0.1s ease-out;
    width: ${props => props.width};
    border: 1px solid ${props => theme[props.theme].border};
    color: ${props => theme[props.theme].color};
    outline: none;
    text-decoration: none;

    svg {
      font-size: ${props => (props.size ? size[props.size].iconSize : '12px')};
    }

    &:hover,
    &:focus {
      background: ${props => theme[props.theme].backgroundHover};
      border: 1px solid ${props => theme[props.theme].borderHover};
      color: ${props => theme[props.theme].colorHover};
    }
  }
`;

const IconBefore = styled.span`
  margin-right: 5px;
  display: inline-block;
  width: 12px;
  position: relative;
  top: 1px;
`;

const IconAfter = styled.span`
  margin-left: 5px;
  display: inline-block;
  width: 12px;
  position: relative;
  top: 1px;
`;

// MODULE
export default class Button extends Component {
  constructor() {
    super();
    this.state = {};
    this.onClick = this.onClick.bind(this);
    this.getIcon = this.getIcon.bind(this);
  }

  onClick(ev) {
    if (this.props.disabled) {
      ev.preventDefault();
      return;
    }
    this.props.onClick(ev);
    this.button.blur();
  }

  getIcon(type) {
    switch (type) {
      // case 'plus': {
      //   return <PlusIcon />;
      // }
      // case 'back': {
      //   return <BackArrow />;
      // }
      // case 'edit': {
      //   return <EditIcon />;
      // }
      default:
        return null;
    }
  }

  render() {
    let El;
    if (this.props.type === 'link') {
      El = props => (
        <a to={this.props.href} target={this.props.target}>
          {this.props.iconBefore && <IconBefore>{this.getIcon(this.props.iconBefore)}</IconBefore>}
          <span>{this.props.text || this.props.children}</span>
          {this.props.iconAfter && <IconAfter>{this.getIcon(this.props.iconAfter)}</IconAfter>}
        </a>
      );
    } else {
      El = props => (
        <button
          ref={button => {
            this.button = button;
          }}
          type={this.props.type}
          onClick={this.onClick}
          {...props}
        >
          {this.props.iconBefore && <IconBefore>{this.getIcon(this.props.iconBefore)}</IconBefore>}
          <span>{this.props.text || this.props.children}</span>
          {this.props.iconAfter && <IconAfter>{this.getIcon(this.props.iconAfter)}</IconAfter>}
        </button>
      );
    }
    // console.log(El);
    return (
      <Wrap
        disabled={this.props.disabled}
        theme={this.props.theme}
        round={this.props.round}
        size={this.props.size}
        align={this.props.align}
        width={this.props.width}
        style={this.props.style}
      >
        <El />
      </Wrap>
    );
  }
}

// Props Validation
Button.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(theme)),
  round: PropTypes.bool,
  size: PropTypes.string,
  align: PropTypes.string,
  width: PropTypes.string,
  iconBefore: PropTypes.string,
  iconAfter: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  theme: 'mainFilled',
  type: 'button',
  round: false,
  size: 'small',
  align: 'left',
  width: '100%',
  iconBefore: '',
  iconAfter: '',
  text: '',
  style: {},
  disabled: false
};
