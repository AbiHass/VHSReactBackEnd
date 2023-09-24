import { useNavigate } from "react-router-dom";

import {
  ContainerInfoStyled,
  TextStyled,
  TitleStyled,
} from "./ConfirmationStyled";
import { Button } from "../../components/Productos/ProductosStyles";

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
        <ContainerInfoStyled>
          <TitleStyled>¡Gracias por tu compra!</TitleStyled>
          <img src="https://res.cloudinary.com/dsaiboxvk/image/upload/v1695576371/leo_dicaprio_q3myvf.jpg" alt="" />
          <p>
            Te enviaremos un correo electrónico con los detalles de tu pedido.
          </p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate("/")}>Volver</Button>
      </TextStyled>
    </div>
  );
};

export default Confirmation;
