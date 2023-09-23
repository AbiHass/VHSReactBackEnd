import React from "react";
import { ContactContainerStyled, Divider } from "./ContactStyles";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <ContactContainerStyled>
      <Divider/>
      <h1>Contacto</h1>
      <span><Link to="/">
        <FaInstagram />
      </Link>
      <Link to="/">
        <FaWhatsapp />
      </Link>
      </span>
    </ContactContainerStyled>
  );
};

export default Contact;
