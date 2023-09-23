import React from "react";
import {
  BtnAdd,
  ProductInfo,
  ProductPrice,
  ProductoContainerStyled,
} from "./ProductosStyles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
const Producto = ({ img, name, director, price, id}) => {
  const dispatch = useDispatch();
  return (
    <ProductoContainerStyled>
      <img src={img} alt="" />
      <ProductInfo>
        <h2>{name} </h2>
        <h1>{director}</h1>
        <ProductPrice>
          <span>USD {price} </span>
        </ProductPrice>
      </ProductInfo>
      <BtnAdd onClick={() => dispatch(addToCart({img, name, price, id, director}))}>
        Comprar
      </BtnAdd>
    </ProductoContainerStyled>
  );
};

export default Producto;
