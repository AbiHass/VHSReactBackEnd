import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  LoginContainerStyled,
  NavbarContainerStyled,
} from "./NavbarStyles";
import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();
  return (
    <NavbarContainerStyled>
      <ModalCart />
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <LinksContainerStyled>
        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>
        <LinkContainerStyled
          onClick={() =>
            currentUser ? navigate("/orders") : navigate("/login")
          }
        >
          <span>
            {currentUser ? `${currentUser.nombre}` : "Iniciar sesión"}
          </span>
        </LinkContainerStyled>
        <LoginContainerStyled onClick={() =>
            currentUser ? navigate("/orders") : navigate("/login")
          }>
          <FaUser/>
        </LoginContainerStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
