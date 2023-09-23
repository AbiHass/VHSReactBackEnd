import React from "react";
import { Form, LinkRegisterStyled, LoginContainerStyled, LoginPasswordStyled, LoginRegisterStyled } from "./LoginStyles";
import { Formik } from "formik";
import { loginValidationSchema } from "../../formik/validationSchema";
import { loginInitialValues } from "../../formik/initialValues";
import LoginInput from "../../components/UI/LoginInput/LoginInput";
import { Link } from "react-router-dom";
import Submit from "../../components/UI/Submit/Submit";
import { useDispatch } from "react-redux";
import { useRedirect } from "../../hooks/useRedirect";
import { loginUser } from "../../axios/axios.user";
import { setCurrentUser } from "../../redux/user/userSlice";

const Login = () => {
  const dispatch = useDispatch()
  useRedirect('/')
  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>

      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password)
          if (user) {
            dispatch(setCurrentUser({
              ...user.usuario,
              token: user.token
            }))
          }
        }}
      >
        <Form>
          <LoginInput type="text" name="email" placeholder="Email" />
          <LoginInput type="password" name="password" placeholder="Password" />
          <Link to="/forgot-password">
            <LoginPasswordStyled>
              Olvidé mi contraseña
            </LoginPasswordStyled>
          </Link>

            <LoginRegisterStyled>
              ¿No tenés una cuenta?
            </LoginRegisterStyled>
          <Link to="/register">
            <LinkRegisterStyled>
            ¡Registrate!
            </LinkRegisterStyled>
          </Link>
          <Submit type="button">Ingresar</Submit>
        </Form>
      </Formik>


    </LoginContainerStyled>
  );
};

export default Login;
