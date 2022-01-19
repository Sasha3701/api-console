import {useState} from 'react';
import styled from 'styled-components';
import {IPropsDropdown} from './Dropdown.props';

const DropdownMain = styled.div`
    
`
const DropdownBody = styled.div`
    
`

const Dropdown = ({status, title, id}: IPropsDropdown): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleChangeStatus = (): void => {
    setOpen((prevState: boolean): boolean => !prevState);
  };

  return (
      <>
        <DropdownMain>

        </DropdownMain>
        {open ? <DropdownBody></DropdownBody> : null}
      </>
  )
};

export default Dropdown;
