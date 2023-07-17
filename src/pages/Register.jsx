import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { MainContainer } from 'components/App.styled';

export default function Register() {
  return (
    <MainContainer>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </MainContainer>
  );
}
