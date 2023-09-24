import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const VerifyContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 110px 0 70px 0;
  background-color: var(--orange);
  h1{
    font-family: var(--font);
    font-size: 30px;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

