import React, { Ref } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage } from '@hookform/error-message';

const InputWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
  .text--error {
    font-size: 12px;
    margin-top: 5px;
    margin-left: 16px;
    transition: 0.3s;
    transform: translateY(-20px);
    opacity: 0;
    &:before {
      content: '* ';
    }
  }
  .show-error {
    transform: translateY(0);
    opacity: 1;
    transition: 0.3s;
  }
`;
const InputLabel = styled.label`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 40px;
  padding: 0 20px;
`;
const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  margin-left: 10px;
  padding: 10px;
  &:focus + span {
    transition: 0.2s;
  }
  &::placeholder {
    color: gray;
  }
`;

export const Input = ({ icon, inputRef, errors, ...rest }) => {
  return (
    <InputWrapper>
      <InputLabel indicateError={errors && errors[rest.name]}>
        <StyledInput ref={inputRef} {...rest} />
        <span>{icon && <FontAwesomeIcon icon={icon} />}</span>
      </InputLabel>
      {errors && (
        <div className={`text--error ${errors[rest.name] && 'show-error'}`}>
          <ErrorMessage name={rest.name} errors={errors} />
        </div>
      )}
    </InputWrapper>
  );
};
export default Input;
