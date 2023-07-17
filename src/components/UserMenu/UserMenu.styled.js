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
  color: #e84a5f;

  background-color: var(--itemBackgroundColor);
  border-radius: 5px;
  border: 2px solid #448585;
  box-shadow: var(--mainBoxShadow);

  cursor: pointer;

  transition: all 250ms ease-in-out;

  &:hover {
    color: var(--accentTextColor);
    background-color: var(--mainBackgroundColor);
  }
`;