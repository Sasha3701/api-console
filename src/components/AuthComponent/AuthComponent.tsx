import styled from 'styled-components';
import {INPUT_NAME} from '../../const';
import Main from '../Main/Main';
import Title from '../Title/Title';
import {Button, Input} from '../UI';
import {Form, Formik, FormikHelpers} from 'formik';
import {IUser} from '../../models';
import {AuthSchema} from '../../utils/Schemes';
import {Logo} from '../../images';

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
  return (
    <Container>
      <Logo style={{marginBottom: '20px'}} />
      <Wrapper>
        <Title variant="auth">API-консолька</Title>
        <Formik
          initialValues={initialState}
          validationSchema={AuthSchema}
          onSubmit={(values: IUser, {setSubmitting}: FormikHelpers<IUser>) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          {({handleChange, handleBlur, errors, touched, dirty, isValid}) => (
            <CustomForm>
              <Input
                name={INPUT_NAME.LOGIN}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.login && !!errors.login}
                label="Логин"
              />
              <Input
                name={INPUT_NAME.SUBLOGIN}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.sublogin && !!errors.sublogin}
                label="Сублогин"
                optional={true}
              />
              <Input
                name={INPUT_NAME.PASSWORD}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && !!errors.password}
                type="password"
                label="Пароль"
              />
              <Button style={{marginTop: '20px'}} type="submit" disabled={!(isValid && dirty)}>
                Войти
              </Button>
            </CustomForm>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default AuthComponent;
