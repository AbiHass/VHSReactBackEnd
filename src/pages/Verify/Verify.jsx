import { useNavigate } from "react-router-dom";
import { Form, VerifyContainerStyled } from "./VerifyStyles";
import { Formik } from "formik";
import { verifyValidationSchema } from "../../formik/validationSchema";
import { verifyInitialValues } from "../../formik/initialValues";
import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";
import Loader from "../../components/UI/Loader/Loader";
import { verifyUser } from "../../axios/axios.user";


const Verify = () => {
    const navigate = useNavigate();
    return (
      <VerifyContainerStyled>
        <h1>Verificar Usuario</h1>
  
        <Formik
          initialValues={verifyInitialValues}
          validationSchema={verifyValidationSchema}
          onSubmit={async (values) => {
            try{
                await verifyUser (values.code, values.email);
                alert ("Usuario verificado con éxito");
                navigate("/");                
            } catch (error){
                alert("Oops, algo salió mal. Vuelve a intentarlo");
            }
          }}

        >
          {({ isSubmitting}) => (
          <Form>
            <LoginInput type="text" name="code" placeholder="Código" />
            <LoginInput type="text" name="email" placeholder="Email" />            

            <Submit type="button">
                {" "}
                {isSubmitting ? <Loader/> : "Enviar"}
            </Submit>
          </Form>
          )}  
        </Formik>
      </VerifyContainerStyled>
    );
  };
  
  export default Verify;