import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";

export const CheckoutDatosContainer = styled.div`
  background-color: var(--orange);
  font-family: var(--font);
  display: flex;
  justify-content: center;
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Form = styled(FormikForm)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    text-transform: uppercase;
  }
`;
export const Divider = styled.div`
border: 1px solid black;
width: 50%;
margin: 20px 0;
@media (max-width: 425px){
  width: 80%;
}

`;
