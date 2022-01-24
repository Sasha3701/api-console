import {useEffect, useState} from 'react';
import {IPropsCheckAuth} from './CheckAuth.props';
import {RootState} from '../../store/reducers/rootReducer';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {PATHS} from '../../const';

const CheckAuth = ({children}: IPropsCheckAuth): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const {login, sessionKey} = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!login && !sessionKey) {
      navigate(PATHS.AUTH.path);
    } else {
      setShow(true);
    }
  }, []);

  return show ? <>{children}</> : <></>;
};

export default CheckAuth;
