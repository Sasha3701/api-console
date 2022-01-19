import {forwardRef} from 'react';
import styled from 'styled-components';
import Loader from '../../Loader/Loader';
import {IPropsButton} from './Button.props';

const ButtonFill = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  min-width: 110px;
  min-height: 40px;
  padding: 5px 10px;
  color: var(--color-white);
  font-size: 16px;
  font-weight: 500;
  background: var(--color-grad-1);
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    opacity: 0.85;
  }
  &:focus {
    outline: 2px solid var(--color-blue);
  }
  &:active {
    opacity: 1;
    background: var(--color-grad-3);
  }
  &:disabled {
    cursor: not-allowed;
    background: var(--color-grad-4);
  }
`;

const ButtonTransparent = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover svg {
    
  }
`;

const Button = forwardRef<HTMLButtonElement, IPropsButton>(
  ({children, loading = false, theme = 'fill', iconLeft, iconRight, ...props}, ref) => {
    switch (theme) {
      case 'fill':
        return (
          <ButtonFill ref={ref} {...props}>
            {loading ? <Loader /> : children}
          </ButtonFill>
        );
      case 'transparent':
        return (
          <ButtonTransparent ref={ref} {...props}>
            {iconLeft ? iconLeft: null}
            {children}
            {iconRight ? iconRight: null}
          </ButtonTransparent>
        );
      default:
        const a: never = theme;
        return <></>;
    }
  }
);

export default Button;
