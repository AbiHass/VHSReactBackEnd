import { AnimatePresence } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonCart,
  ButtonContainer,
  CartContainerStyled,
  CartProductsContainer,
  PriceContainer,
} from "./ModalCartStyles";
import CartCard from "./CartCard";
import { clearCart, toggleHiddenCart } from "../../../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ModalCart = () => {
  const {
    cartItems,

    shippingCost,
    hidden: hiddenCart,
  } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      {!hiddenCart && (
        <CartContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ type: "spring", damping: 27 }}
          key="cart-modal"
        >
          <CartProductsContainer>
            {cartItems.length ? (
              cartItems.map((item) => <CartCard key={item.id} {...item} />)
            ) : (
              <p>No ha seleccionado ningún producto</p>
            )}
          </CartProductsContainer>
          <PriceContainer>
            <p>Subtotal: USD {totalPrice}</p>
            <p>Envío: USD {shippingCost}</p>
            <p>Total: USD {totalPrice + shippingCost}</p>
          </PriceContainer>
          <ButtonContainer>
            <ButtonCart onClick={() => {
            navigate("/checkout");
          dispatch(toggleHiddenCart());
        }}>
              Comprar
            </ButtonCart>
            <ButtonCart
              onClick={() => dispatch(clearCart())}
              disable={!cartItems.length}
            >
              Vaciar Carrito
            </ButtonCart>
          </ButtonContainer>
        </CartContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalCart;
