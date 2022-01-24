import styled from 'styled-components';
import {SortIcon} from '../../images';
import {Button} from '../UI';
import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';
import {consoleRequest} from '../../store/actions/consoleAction';
import {RootState} from '../../store/reducers/rootReducer';

const CustomFooter = styled.footer`
  padding: 15px;
  border-top: 1px solid var(--color-gray);
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-content: center;
`;

const Footer = (): JSX.Element => {
  const dispatch = useDispatch();
  const {value} = useSelector((state: RootState) => state.console);

  const handleSend = useCallback(() => {
    dispatch(consoleRequest(value));
  }, [dispatch, value]);

  return (
    <CustomFooter>
      <Button onClick={handleSend}>Отправить</Button>
      <Button theme="transparent" iconLeft={<SortIcon />}>
        Форматировать
      </Button>
    </CustomFooter>
  );
};

export default Footer;
