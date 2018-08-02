import styled from 'styled-components';

const FormStyles = styled.div`
  input {
    font-size: 14px;
    line-height: 20px;
    height: 32px;
    padding: 4px 5px;
    font-family: inherit;
    width: 100%;
    max-width: 250px;
    background: #fafbfc;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: 0;
    display: inline-block;

    &:focus {
      background: #fff;
      border: 1px solid #4c9aff;
    }
  }

  label {
    // text-align: right;
    // width: 100px;
    // margin-right: 15px;
    word-wrap: break-word;
    color: #707070;
  }
`;

export default FormStyles;
