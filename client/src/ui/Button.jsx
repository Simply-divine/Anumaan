import React from 'react';
// import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components/macro';

const buttonSizes = {
  small: css`
    padding: 8px 10px;
    font-size: 12px;
  `,
  medium: css`
    padding: 10px 15px;
    font-size: 12px;
  `,
  large: css`
    padding: 12px 20px;
    font-size: 14px;
  `,
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin: 10px 0;
  padding: 10px 15px;
  border-radius: 50px;
  line-height: 1;
  width: ${(p) => p.width};
  font-size: 14px;
  ${(p) => buttonSizes[p.size]}
  transition: 0.2s;
  height: fit-content;
  &:hover {
    transform: scale(1.02);
    transition: 0.2s;
  }
  &:disabled {
    opacity: 0.8;
  }
  @media screen {
    padding: 10px 25px;
  }
`;

export const Button = ({
  variant = 'primary',
  width,
  size,
  icon,
  isLoading = false,
  children,
  ...rest
}) => (
  <StyledButton
    variant={variant}
    size={size}
    disabled={isLoading}
    width={width}
    {...rest}
  >
    {icon && (
      <FontAwesomeIcon spin={isLoading} icon={isLoading ? 'spinner' : icon} />
    )}
    {children}
  </StyledButton>
);
export default Button;
