import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { LogOutButton, UserName, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const hadleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <LogOutButton type="button" onClick={hadleLogOut}>
        Log out
      </LogOutButton>
    </Wrapper>
  );
};
