import React from "react";
import {
  CartItemContainer,
  ItemHandler,
  Price,
} from "./ModalCartStyles";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../../redux/cart/cartSlice";

const CartCard = ({ img, name, id, price, quantity, director }) => {
  const dispatch = useDispatch();
  return (
    <CartItemContainer>
      <span>
        <img src={img} alt={name} />
        <h3>{name}</h3>
      </span>

      <Price>
        <p>${price}</p>
      </Price>
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
