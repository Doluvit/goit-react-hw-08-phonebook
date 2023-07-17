import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Container,
  ErrorMsg,
  FormButton,
  Input,
  Label,
  LogForm,
  Section,
} from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(7).required(),
});

const inValues = {
  id: '',
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  

  return (
    <Container>
      <Formik
        initialValues={inValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <LogForm autoComplete="off">
          <Section>
            <Label htmlFor="email">Email:</Label>
            <Input name="email" type="email" id="email" />
            <ErrorMsg name="email" component="div" />
          </Section>

          <Section>
            <Label htmlFor="password">Password:</Label>
            <Input name="password" type="password" id="password" />
            <ErrorMsg name="password" component="div" />
          </Section>
          <FormButton type="submit">Log in</FormButton>
        </LogForm>
      </Formik>
    </Container>
  );
};
