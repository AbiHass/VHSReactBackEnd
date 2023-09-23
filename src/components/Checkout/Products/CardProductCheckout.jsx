import React from "react";
import {
  ItemInfoStyled,
  ProductoItemContainerStyled,
} from "./ProductsCheckoutStyles";

const CardProductCheckout = ({ img, name, price, quantity }) => {
  return (
    <ProductoItemContainerStyled>
      <span>
        <img src={img} alt={name} />
        <h3>{name}</h3>
      </span>
      <ItemInfoStyled>
        <p>{quantity}</p>
        <p>USD {price}</p>
      </ItemInfoStyled>
    </ProductoItemContainerStyled>
  );
};

export default CardProductCheckout;
