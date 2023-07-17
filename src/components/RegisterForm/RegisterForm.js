import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
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
} from '../LoginForm/LoginForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().min(7).required(),
});

const inValues = {
  id: '',
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
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
            <Label htmlFor="name">Username:</Label>
            <Input name="name" type="text" id="name" />
            <ErrorMsg name="name" component="div" />
          </Section>
          <Section>
            <Label htmlFor="email">Email:</Label>
            <Input name="email" type="email" id="email" />
            <ErrorMsg name="email" component="div" />
          </Section>

          <Section>
            <Label htmlFor="password">Password:</Label>
            <Input name="password" type="text" id="password" />
            <ErrorMsg name="password" component="div" />
          </Section>
          <FormButton type="submit">Sine up</FormButton>
        </LogForm>
      </Formik>
    </Container>
  );
};
