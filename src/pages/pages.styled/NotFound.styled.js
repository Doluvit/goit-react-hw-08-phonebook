import styled from 'styled-components';

export const MainForm = styled.div`
  background-color: #fff;
  min-height: 100vh;
  display: grid;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

export const PageMk = styled.p`
  color: var(--textColor);
  font-size: 70px;
  font-style: italic;
  font-weight: bold;
  text-align: center;
`;

export const Link = styled.button`
  display: flex;
  padding: 10px 25px;
  margin-left: auto;
  margin-right: auto;

  font-size: 18px;
  font-weight: 600;
  color: var(--accent-btn-color);

  background-color: var(--itemBackgroundColor);
  border-radius: 5px;
  border: solid 2px var(--textColor);
  box-shadow: var(--mainBoxShadow);

  cursor: pointer;

  transition: all 250ms ease-in-out;

  &:hover {
    color: var(--accentTextColor);
    background-color: #138531;
  }
`;
