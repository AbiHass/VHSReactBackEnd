import React from "react";
import { CartItemContainer, ItemHandler, ItemInfo } from "./ModalCartStyles";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../../redux/cart/cartSlice";

const CartCard = ({ img, name, id, price, quantity, director }) => {
  const dispatch = useDispatch();
  return (
    <CartItemContainer>
      <img src={img} alt={name} />
      <ItemInfo>
        <h3>{name}</h3>
        <p>${price}</p>
      </ItemInfo>
      <ItemHandler>
        <span
          onClick={() =>
            dispatch(addToCart({ img, name, id, price, quantity, director }))
          }
        >
          +
        </span>
        <p>{quantity}</p>
        <span onClick={() => dispatch(removeToCart(id))}>-</span>
      </ItemHandler>
    </CartItemContainer>
  );
};

export default CartCard;
