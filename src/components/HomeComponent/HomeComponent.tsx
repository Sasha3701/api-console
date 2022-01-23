import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import {Textarea, DragButton} from '../UI';

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 50px 1fr 70px;
`;

const WrapperDragButton = styled.div`
  justify-self: center;
  align-self: center;
`;

const CustomMain = styled(Main)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 10px 15px;
  box-sizing: border-box;
`;

const HomeComponent = () => {
  return (
    <Wrapper>
      <Header />
      <CustomMain>
        <Textarea label="Запрос:" name="request" />
        <WrapperDragButton>
          <DragButton />
        </WrapperDragButton>
        <Textarea label="Ответ:" name="response" variant="out" />
      </CustomMain>
      <Footer />
    </Wrapper>
  );
};

export default HomeComponent;
