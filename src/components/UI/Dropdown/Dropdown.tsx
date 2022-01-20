import React, {useState, useRef, useCallback} from 'react';
import {usePopper} from 'react-popper';
import styled from 'styled-components';
import {IDropdownBody, IPropsDropdown, IStatusRequest} from './Dropdown.props';
import {MenuIcon} from '../../../images';

const DropdownMain = styled.div`
  display: flex;
  width: max-content;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: var(--color-white);
  box-shadow: 0px 1px 2px var(--color-shadow);
  border-radius: 5px;
`;

const StatusRequest = styled.span<IStatusRequest>`
  height: 10px;
  width: 10px;
  box-sizing: border-box;
  background-color: ${({statusRequest}: IStatusRequest): string => (statusRequest ? 'var(--color-green)' : 'var(--color-error)')};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
`;

const Title = styled.p`
  font-size: 16px;
  margin: 0 5px;
`;

const WrapperMenu = styled.div`
  cursor: pointer;
  & svg {
    transition: all 0.3s ease;
    fill: var(--color-gray);
  }
  &:hover {
    & svg {
      fill: var(--color-gray-2);
    }
  }
`;

const DropdownBody = styled.ul<IDropdownBody>`
  display: ${({visible}) => (visible ? 'flex' : 'none')};
  margin: 6px 0 6px 0;
  padding: 5px 0 5px 0;
  list-style: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 4px var(--color-shadow);
  border-radius: 3px;
`;

const DropdownItem = styled.li`
  box-sizing: border-box;
  padding: 10px 0;
  text-align: center;
  width: 133px;
  height: 40px;
  margin: 0;
  &:hover {
    color: var(--color-white);
    background-color: var(--color-blue-1);
  }
  &:last-child:hover {
    color: var(--color-white);
    background-color: var(--color-error);
  }
`;


// TODO
const Dropdown = ({status, title, id, body}: IPropsDropdown): JSX.Element => {
  const [visible, setVisibility] = useState<boolean>(false);
  const [mouseOnBody, setMouseOnBody] = useState<boolean>(false);

  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const {styles, attributes} = usePopper(referenceRef.current, popperRef.current, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [-98, 0],
        },
      },
    ],
  });

  const handleChangeVisible = useCallback((): void => {
    setVisibility((prevState) => !prevState);
  }, []);

  const handleChangeStatusBody = useCallback((): void => {
    setMouseOnBody((prevState) => !prevState);
  }, []);

  const handleMouseEnterMain = useCallback((): void => {
    handleChangeVisible();
  }, [handleChangeVisible]);

  const handleMouseEnterBody = useCallback((): void => {
    handleChangeStatusBody();
  }, [handleChangeStatusBody]);

  const handleMouseLeaveMain = useCallback((): void => {
    if (mouseOnBody) {
      return;
    }
    handleChangeVisible();
  }, [handleChangeVisible, mouseOnBody]);

  const handleMouseLeaveBody = useCallback((): void => {
    handleChangeStatusBody();
    handleChangeVisible();
  }, [handleChangeVisible, handleChangeStatusBody]);

  return (
    <>
      <DropdownMain>
        <StatusRequest statusRequest={status} />
        <Title>{title}</Title>
        <WrapperMenu ref={referenceRef} onMouseEnter={handleMouseEnterMain} onMouseLeave={handleMouseLeaveMain}>
          <MenuIcon />
        </WrapperMenu>
      </DropdownMain>
      <div
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
        onMouseEnter={handleMouseEnterBody}
        onMouseLeave={handleMouseLeaveBody}
      >
        <DropdownBody style={styles.offset} visible={visible}>
          <DropdownItem>Выполнить</DropdownItem>
          <DropdownItem>Скопировать</DropdownItem>
          <DropdownItem>Удалить</DropdownItem>
        </DropdownBody>
      </div>
    </>
  );
};

export default Dropdown;
