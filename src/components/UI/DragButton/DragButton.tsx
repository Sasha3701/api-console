import {forwardRef} from 'react';
import styled from 'styled-components';
import {MenuIcon} from '../../../images';
import Loader from '../../Loader/Loader';
import {IPropsDragButton} from './DragButton.props';

const Button = styled.button`
  padding: 6px;
  background-color: transparent;
  border: none;
  width: max-content;
  height: max-content;
  cursor: pointer;
  & svg {
    fill: var(--color-gray);
  }
  &:hover svg {
    fill: var(--color-gray-1);
  }
  &:focus {
    outline: none;
  }
  &:active {
    cursor: col-resize;
  }
`;

const DragButton = forwardRef<HTMLButtonElement, IPropsDragButton>(({loading, disabled, ...props}, ref): JSX.Element => {
  return (
    <Button ref={ref} disabled={disabled || loading} {...props}>
      {loading ? <Loader /> : <MenuIcon />}
    </Button>
  );
});

export default DragButton;
