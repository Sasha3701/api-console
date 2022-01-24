import styled from 'styled-components';
import {FullIcon, Logo, LogoutIcon, NoFullIcon} from '../../images';
import Title from '../Title/Title';
import {Button} from '../UI';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/reducers/rootReducer';
import Account from '../Account/Account';
import {useCallback, useEffect, useState} from 'react';
import {userLogout} from '../../store/actions/userAction';
import {useNavigate} from 'react-router-dom';
import {PATHS} from '../../const';
import {CONTENT} from '../../content';

const CustomHeader = styled.header`
  display: grid;
  grid-template-columns: auto auto 1fr auto auto auto;
  align-items: center;
  padding: 10px 15px;
  background-color: var(--color-gray-4);
`;

const EmptyBox = styled.div``;

const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const [fullscreen, setFullscreen] = useState<boolean>(() => !!document.fullscreenElement);
  const {login, sublogin, sessionKey} = useSelector((state: RootState) => state.user);

  const logout = useCallback(() => {
    dispatch(userLogout());
  }, [dispatch]);

  const handleChangeScreen = useCallback(() => {
    if (!fullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullscreen((prevState) => !prevState);
  }, [fullscreen]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionKey) {
      navigate(PATHS.AUTH.path);
    }
  }, [navigate, sessionKey]);

  return (
    <CustomHeader>
      <Logo style={{marginRight: '20px'}} />
      <Title variant="home">{CONTENT.HEADER.TITLE}</Title>
      <EmptyBox></EmptyBox>
      <Account style={{marginRight: '30px'}} login={login} sublogin={sublogin} />
      <Button onClick={logout} style={{marginRight: '30px'}} theme="transparent" iconRight={<LogoutIcon />}>
        {CONTENT.HEADER.TITLE}
      </Button>
      <Button onClick={handleChangeScreen} theme="transparent">
        {fullscreen ? <NoFullIcon /> : <FullIcon />}
      </Button>
    </CustomHeader>
  );
};

export default Header;
