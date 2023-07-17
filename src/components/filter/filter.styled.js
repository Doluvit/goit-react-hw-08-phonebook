import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterLabel = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
  color: var(--textColor);
  text-shadow: var(--insetBoxShadow);
`;

export const FilterInput = styled.input`
  padding: 5px 10px;
  background-color: var(--mainBackgroundColor);
  font-size: 24px;
  color: var(--textColor);

  border: solid 2px var(--textColor);
  border-radius: 5px;
  box-shadow: var(--insetBoxShadow);
`;
