import styled from 'styled-components';
import {SortIcon} from '../../images';
import {Button} from '../UI';
import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';
import {consoleFormatValue, consoleRequest} from '../../store/actions/consoleAction';
import {RootState} from '../../store/reducers/rootReducer';
import {IPropsFooter} from './Footer.props';
import {CONTENT} from '../../content';

const CustomFooter = styled.footer`
  padding: 15px;
  border-top: 1px solid var(--color-gray);
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-content: center;
`;

const Footer = ({error}: IPropsFooter): JSX.Element => {
  const dispatch = useDispatch();
  const {value} = useSelector((state: RootState) => state.console);

  const handleSend = useCallback(() => {
    dispatch(consoleRequest(value));
  }, [dispatch, value]);

  const handleFormat = useCallback(() => {
    dispatch(consoleFormatValue(value));
  }, [dispatch, value]);

  return (
    <CustomFooter>
      <Button onClick={handleSend} disabled={error}>
        {CONTENT.FOOTER.BUTTON.SEND}
      </Button>
      <Button onClick={handleFormat} theme="transparent" iconLeft={<SortIcon />}>
        {CONTENT.FOOTER.BUTTON.FORMAT}
      </Button>
    </CustomFooter>
  );
};

export default Footer;
