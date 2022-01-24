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
  transition: all 0.3s ease;
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

const WrapperLeft = styled.div`
  margin-right: 8px;
`;

const WrapperRight = styled.div`
  margin-left: 11px;
`;

const ButtonTransparent = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  cursor: pointer;
  & svg {
    transition: all 0.3s ease;
  }
  &:hover {
    color: var(--color-blue-1);
    & svg {
      stroke: var(--color-blue-1);
    }
  }
  &:focus {
    outline: 2px solid var(--color-blue);
    border-radius: 7px;
    color: var(--color-blue-1);
    & svg {
      stroke: var(--color-blue-1);
    }
  }
`;

const Button = forwardRef<HTMLButtonElement, IPropsButton>(
  ({children, loading = false, theme = 'fill', iconLeft, iconRight, disabled, ...props}, ref) => {
    switch (theme) {
      case 'fill':
        return (
          <ButtonFill ref={ref} {...props} disabled={disabled || loading}>
            {loading ? <Loader /> : children}
          </ButtonFill>
        );
      case 'transparent':
        return (
          <ButtonTransparent ref={ref} {...props}>
            {iconLeft ? <WrapperLeft>{iconLeft}</WrapperLeft> : null}
            {children}
            {iconRight ? <WrapperRight>{iconRight}</WrapperRight> : null}
          </ButtonTransparent>
        );
      default:
        const a: never = theme;
        return <></>;
    }
  }
);

export default Button;
