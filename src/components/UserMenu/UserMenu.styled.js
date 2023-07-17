import { styled } from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;`


export const UserName = styled.p`
  font-weight: 700;`

export const LogOutButton = styled.button`
  display: flex;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;

  font-size: 14px;
  font-weight: 700;
  color: var(--accent-btn-color);

  background-color: var(--itemBackgroundColor);
  border-radius: 5px;
  border: solid 2px var(--textColor);
  box-shadow: var(--mainBoxShadow);

  cursor: pointer;

  transition: all 250ms ease-in-out;

  &:hover {
    color: var(--accentTextColor);
    background-color: var(--accent-btn-color);
  }
`;