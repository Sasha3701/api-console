import styled from 'styled-components';
import {IHistory} from '../../../models';
import {Manager, Reference, Popper} from 'react-popper';
import {useState, useRef, useCallback} from 'react';
import {IStatusRequest} from './Dropdown.props';
import {Button} from '..';
import {MenuIcon} from '../../../images';
import {CONTENT} from '../../../content';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  background-color: var(--color-white);
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 1px 2px var(--color-shadow);
  &:hover {
    box-shadow: 0px 1px 4px var(--color-shadow-1);
  }
`;

const StatusRequest = styled.span<IStatusRequest>`
  display: inline-block;
  height: 10px;
  width: 10px;
  box-sizing: border-box;
  background-color: ${({statusRequest}: IStatusRequest): string => (statusRequest ? 'var(--color-green)' : 'var(--color-error)')};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-right: 5px;
`;

const CustomButtonWithImg = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 5px 5px 5px 10px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const CustomButton = styled(Button)`
  padding: 5px 10px 5px 0px;
  & svg {
    fill: var(--color-gray);
  }
  &:hover {
    & svg {
      stroke: none;
      fill: var(--color-gray-2);
    }
  }
  &:focus {
    outline: none;
    & svg {
      stroke: none;
    }
  }
`;

const ListAction = styled.ul`
  list-style: none;
  background-color: var(--color-white);
  box-shadow: 0px 1px 4px var(--color-shadow-1);
  border-radius: 3px;
  margin: 0px 0px 0px 15px;
  padding: 5px 0;
`;

const ItemList = styled.li`
  &:last-child {
    border-top: 1px solid var(--color-gray);
    margin-top: 5px;
  }
  &:hover {
    color: var(--color-white);
    background-color: var(--color-blue-1);
    &:last-child {
      background-color: var(--color-error);
    }
  }
`;

const ListButton = styled.button`
  display: inline-block;
  margin: 0;
  padding: 10px 0px 10px 15px;
  border: none;
  width: 133px;
  text-align: left;
  font-size: 16px;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
`;

const Dropdown = (props: IHistory): JSX.Element => {
  const [dropdownOpen, setDropdownToggle] = useState(false);
  const dropdownListRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  const setButtonRef = useCallback((node, ref) => {
    dropdownButtonRef.current = node;
    return ref(node);
  }, []);

  const setListRef = useCallback((node, ref) => {
    dropdownListRef.current = node;
    return ref(node);
  }, []);

  const dropdownToggle = () => {
    setDropdownToggle((prevState) => !prevState);
  };

  const modifiers: any = {
    preventOverflow: {
      padding: 0,
    },
    shift: {
      enabled: true,
    },
    flip: {
      enabled: true,
      flipVariationsByContent: true,
      behavior: 'flip',
    },
  };

  return (
    <Manager>
      <>
        <Reference>
          {({ref}) => (
            <Container>
              <CustomButtonWithImg onClick={dropdownToggle} ref={(node) => setButtonRef(node, ref)}>
                <StatusRequest statusRequest={props.status} />
                {props.title}
              </CustomButtonWithImg>
              <CustomButton theme="transparent" onClick={dropdownToggle} ref={(node) => setButtonRef(node, ref)}>
                <MenuIcon />
              </CustomButton>
            </Container>
          )}
        </Reference>
        {dropdownOpen && (
          <Popper placement="bottom-end" modifiers={modifiers}>
            {({ref, style, placement, arrowProps}) => (
              <ListAction ref={(node) => setListRef(node, ref)} style={style} data-placement={placement}>
                {CONTENT.CONSOLE.DROPDOWN.ACTIONS.map((action) => (
                  <ItemList>
                    <ListButton>{action}</ListButton>
                  </ItemList>
                ))}
              </ListAction>
            )}
          </Popper>
        )}
      </>
    </Manager>
  );
};

export default Dropdown;
