import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { MainContainer } from 'components/App.styled';

export default function Login() {
  return (
    <MainContainer>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </MainContainer>
  );
}
