import styled from 'styled-components';

const Button = styled.button`
  font-family: inherit;
  color: #fff;
  background: #0052cc;
  outline: 0;
  border: none;
  font-size: 14px;
  padding: 4px 10px;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  line-height: 22px;
  transition: background 0.1s ease-out;

  &:hover {
    background-color: #0065ff;
  }
`;

export default Button;
