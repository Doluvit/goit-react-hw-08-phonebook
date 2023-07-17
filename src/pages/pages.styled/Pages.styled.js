import { styled } from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 170px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  margin-top: 20px;
  font-weight: 700;
  font-size: 60px;
  color: var(--textColor);
`;
export const LayoutContainer = styled.div`
  max-width: 960px;
  margin: 20px auto;
  padding: 16px 16px 40px 16px;
  border: solid 2px var(--textColor);
  border-radius: 5px;
  box-shadow: var(--mainBoxShadow);
  background-color: var(--mainBackgroundColor);
`;
export const Img = styled.img`
  margin-top: 5%;
`;
