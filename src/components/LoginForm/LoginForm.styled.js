import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 170px);
`;

export const LogForm = styled(Form)`
  padding: 20px;
  width: 360px;
  border: 2px solid #448585;
  border-radius: 5px;
  box-shadow: var(--mainBoxShadow);
  background-color: #fff;
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
  font-size: 24px;
  color: var(--textColor);
`;

export const Input = styled(Field)`
  padding: 5px 10px;

  font-size: 24px;
  color: var(--textColor);

  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  box-shadow: var(--insetBoxShadow);
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
