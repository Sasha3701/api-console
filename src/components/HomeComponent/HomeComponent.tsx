import styled from 'styled-components';
import Console from '../Console/Console';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import History from '../History/History';
import {MIN_WIDTH_TEXTAREA} from '../../const';
import {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {isJsonString} from '../../utils';
import {consoleChangeValue} from '../../store/actions/consoleAction';
import {userCheck} from '../../store/actions/userAction';

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 50px 1fr 70px;
`;

const HomeComponent = () => {
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userCheck());
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const valueTextarea = e.target.value;
      if (isJsonString(valueTextarea)) {
        setError(false);
      } else {
        setError(true);
      }
      dispatch(consoleChangeValue(valueTextarea));
    },
    [dispatch]
  );

  return (
    <Wrapper>
      <Header />
      <Main>
        <History />
        <Console errorInput={error} handleChange={handleChange} minWidth={MIN_WIDTH_TEXTAREA} />
      </Main>
      <Footer error={error} />
    </Wrapper>
  );
};

export default HomeComponent;
