import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {CloseIcon} from '../../images';
import {consoleHistoryClear} from '../../store/actions/consoleAction';
import {RootState} from '../../store/reducers/rootReducer';
import {Button, Dropdown} from '../UI';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--color-gray-4);
  height: 50px;
  box-sizing: border-box;
  border: 1px solid var(--color-gray);
`;

const WrapperRequests = styled.div`
  padding: 10px 15px;
  border-right: 1px solid var(--color-gray);
`;

const History = (): JSX.Element => {
  const {history} = useSelector((state: RootState) => state.console);
  const dispatch = useDispatch();

  const handleClearHistory = useCallback(() => {
    dispatch(consoleHistoryClear());
  }, [dispatch]);

  return (
    <Container>
      {history.length !== 0 ? (
        <>
          <WrapperRequests>
            {history.map(({title, id, request, status}) => (
              <Dropdown key={id} id={id} title={title} request={request} status={status} />
            ))}
          </WrapperRequests>
          <Button onClick={handleClearHistory} style={{margin: '15px'}} theme="transparent">
            <CloseIcon />
          </Button>
        </>
      ) : null}
    </Container>
  );
};

export default History;
