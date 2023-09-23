import React from "react";
import { ForgotContainerStyled, Form } from "./ForgotPasswordStyles";
import { Formik } from "formik";
import LoginInput from "../../components/UI/LoginInput/LoginInput";
import { loginValidationSchema } from "../../formik/validationSchema";
import { loginInitialValues } from "../../formik/initialValues";
import Submit from "../../components/UI/Submit/Submit";

const ForgotPassword = () => {
  return (
    <ForgotContainerStyled>
      <h1>Reestablece tu contraseña</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
      >
        <Form>
          <LoginInput type="text" name="email" placeholder="Mail de recuperación" />
          <Submit type='button' onClick={e => e.preventDefault()}>
            Enviar
          </Submit>
        </Form>
      </Formik>
    </ForgotContainerStyled>
  );
};

export default ForgotPassword;
