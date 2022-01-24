import styled from 'styled-components';
import Console from '../Console/Console';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import {MIN_WIDTH_TEXTAREA} from '../../const';

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 50px 1fr 70px;
`;

const HomeComponent = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Console minWidth={MIN_WIDTH_TEXTAREA} />
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default HomeComponent;
