import React from "react";
import {
  ErrorMessageStyled,
  InputContainerStyled,
  InputLabel,
  InputStyled,
} from "./InputStyles";
import { ErrorMessage, Field } from "formik";

const Input = ({ children, name, htmlFor, type, id, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainerStyled>
          <InputLabel htmlFor={htmlFor}> {children} </InputLabel>

          <InputStyled
            type={type}
            id={id}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />

          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
};

export default Input;
