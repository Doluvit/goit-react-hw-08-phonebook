import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Container = styled(Form)`
  margin-bottom: 20px;
  padding: 20px;
  width: 360px;
  border: solid 2px var(--textColor);
  border-radius: 5px;
  background-color: var(--mainBackgroundColor);
`;

export const Section = styled.div`
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  color: var(--textColor);
`;

export const Input = styled(Field)`
  width: 95%;
  padding: 5px 10px;

  font-size: 18px;
  color: var(--textColor);

  background-color: transparent;
  border: solid 2px var(--textColor);
  border-radius: 5px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 7px;
  color: red;
`;

export const FormButton = styled.button`
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
    background-color: var(--accent-btn-color);
  }
`;
