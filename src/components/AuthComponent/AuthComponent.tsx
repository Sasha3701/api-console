import styled from 'styled-components';
import {PATHS} from '../../const';
import Main from '../Main/Main';
import Title from '../Title/Title';
import {Button, Input} from '../UI';
import {Form, Formik} from 'formik';
import {IUser} from '../../models';
import {AuthSchema} from '../../utils/Schemes';
import {Logo} from '../../images';
import {useDispatch, useSelector} from 'react-redux';
import {userRequest} from '../../store/actions/userAction';
import {RootState} from '../../store/reducers/rootReducer';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Notification from '../Notification/Notification';
import {CONTENT} from '../../content';

const Container = styled(Main)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray-3);
`;

const Wrapper = styled.div`
  padding: 40px 30px;
  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: var(--color-shadow);
  display: flex;
  flex-direction: column;
  min-width: 520px;
  align-items: flex-start;
`;

const CustomForm = styled(Form)`
  width: 100%;
`;

const initialState: IUser = {
  login: '',
  sublogin: '',
  password: '',
};

const AuthComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  const {loading, error, sessionKey} = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionKey) {
      navigate(PATHS.HOME.path);
    }
  }, [navigate, sessionKey]);

  return (
    <Container>
      <Logo style={{marginBottom: '20px'}} />
      <Wrapper>
        <Title variant="auth">{CONTENT.AUTH.TITLE}</Title>
        {error ? <Notification style={{marginTop: '20px'}} error={error} /> : null}
        <Formik
          initialValues={initialState}
          validationSchema={AuthSchema}
          onSubmit={(values: IUser) => {
            dispatch(userRequest(values));
          }}
        >
          {({handleChange, handleBlur, errors, touched, isValid, isSubmitting}) => (
            <CustomForm>
              <Input
                name={CONTENT.AUTH.INPUTS.LOGIN.NAME}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.login && !!errors.login}
                label={CONTENT.AUTH.INPUTS.LOGIN.LABEL}
              />
              <Input
                name={CONTENT.AUTH.INPUTS.SUBLOGIN.NAME}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.sublogin && !!errors.sublogin}
                label={CONTENT.AUTH.INPUTS.SUBLOGIN.LABEL}
                optional={true}
              />
              <Input
                name={CONTENT.AUTH.INPUTS.PASSWORD.NAME}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && !!errors.password}
                type="password"
                label={CONTENT.AUTH.INPUTS.PASSWORD.LABEL}
              />
              <Button loading={loading} style={{marginTop: '20px'}} type="submit" disabled={!(isValid && !isSubmitting)}>
                {CONTENT.AUTH.BUTTON}
              </Button>
            </CustomForm>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default AuthComponent;
