import styled from 'styled-components';
import Console from '../Console/Console';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducers/rootReducer';
import {MIN_WIDTH_TEXTAREA} from '../../const';

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 50px 1fr 70px;
`;

const HomeComponent = () => {
  const {widthIn, value, valueResponse, errorResponse, loadingConsole} = useSelector((state: RootState) => state.console);

  return (
    <Wrapper>
      <Header />
      <Main>
        <Console
          loadingConsole={loadingConsole}
          valueResponse={valueResponse}
          errorResponse={errorResponse}
          value={value}
          minWidth={MIN_WIDTH_TEXTAREA}
          widthIn={widthIn}
        />
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default HomeComponent;
