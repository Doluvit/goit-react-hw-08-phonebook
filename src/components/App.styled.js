import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainContainer = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--accentTextColor);
  border: 2px solid var(--textColor);
`;

export const FormHeader = styled.h2`
  font-size: 30px;
  color: var(--textColor);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export const NavigationItem = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
`;
