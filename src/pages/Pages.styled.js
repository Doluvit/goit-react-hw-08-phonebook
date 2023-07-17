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
  border: 2px solid #448585;
  border-radius: 5px;
  box-shadow: var(--mainBoxShadow);
  background-color: #daecf0;
`;
export const Img = styled.img`
  margin-top: 10%;
`;
