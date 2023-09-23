import React, { useEffect } from "react";
import {
  MisOrdenesBtn,
  MisOrdenesBtnContainer,
  MisOrdenesContainer,
  MisOrdenesTitle,
} from "./MyOrdersStyles";
import CardsMyOrders from "../../components/MyOrders/CardsMyOrders";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../axios/axios.orders";
import { clearError, fetchOrdersFail } from "../../redux/orders/ordersSlice";
import User from "../../components/User/User";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { orders, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }
    if (!currentUser?.token) {
      dispatch(fetchOrdersFail());
    } else {
      error && dispatch(clearError());
    }
  }, [dispatch, currentUser?.token, orders, error]);
  return (
    <>
      <User />

      <MisOrdenesContainer>
        <MisOrdenesTitle>Mis pedidos</MisOrdenesTitle>

        <CardsMyOrders />

        <MisOrdenesBtnContainer>
           <Link to="/"><MisOrdenesBtn>Volver</MisOrdenesBtn></Link> 
        </MisOrdenesBtnContainer>
      </MisOrdenesContainer>
    </>
  );
};

export default MyOrders;
