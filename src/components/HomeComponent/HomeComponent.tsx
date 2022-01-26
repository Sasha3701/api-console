import styled from 'styled-components';
import Console from '../Console/Console';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import History from '../History/History';
import {MIN_WIDTH_TEXTAREA} from '../../const';
import {ChangeEvent, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {consoleChangeValue} from '../../store/actions/consoleAction';
import {userCheck} from '../../store/actions/userAction';
import {RootState} from '../../store/reducers/rootReducer';

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 50px 1fr 70px;
`;

const HomeComponent = () => {
  const dispatch = useDispatch();
  const {errorRequest} = useSelector((state: RootState) => state.console);

  useEffect(() => {
    dispatch(userCheck());
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const valueTextarea = e.target.value;
      dispatch(consoleChangeValue(valueTextarea));
    },
    [dispatch]
  );

  return (
    <Wrapper>
      <Header />
      <Main>
        <History />
        <Console errorInput={errorRequest} handleChange={handleChange} minWidth={MIN_WIDTH_TEXTAREA} />
      </Main>
      <Footer error={errorRequest} />
    </Wrapper>
  );
};

export default HomeComponent;
