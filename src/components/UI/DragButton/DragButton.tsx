import styled from 'styled-components';
import {MenuIcon} from '../../../images';

const Button = styled.button`
  padding: 4px;
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
  &:active {
    cursor: col-resize;
  }
`;

const DragButton = (): JSX.Element => {
  return (
    <Button>
      <MenuIcon />
    </Button>
  );
};

export default DragButton;
