import React from "react";
import { PriceContainerStyled, ProductosContainerStyled } from "./ProductsCheckoutStyles";
import CardProductCheckout from "./CardProductCheckout";

const ProductsCheckout = ({ cartItems, shippingCost, totalPrice }) => {
  return (
    <ProductosContainerStyled>

     <h2>Tu Compra</h2>
      
        {
          cartItems.length ? (
            cartItems.map(item => <CardProductCheckout key={item.id} {...item} />)
          ) : (
            <p>No tienes ningún producto seleccionado 😥</p>
          )
        }
      <PriceContainerStyled>
        <p>Subtotal: USD {totalPrice}</p>
        <p>Envío: USD {shippingCost}</p>
        <p>Total: USD {totalPrice + shippingCost} </p>
      </PriceContainerStyled>
    </ProductosContainerStyled>

  );
};

export default ProductsCheckout;
