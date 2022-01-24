import styled from 'styled-components';
import {CloseIcon} from '../../images';
import {Button} from '../UI';

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
  return (
    <Container>
      <WrapperRequests></WrapperRequests>
      <Button style={{margin: '15px'}} theme="transparent">
        <CloseIcon />
      </Button>
    </Container>
  );
};

export default History;
