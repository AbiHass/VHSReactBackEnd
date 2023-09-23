import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import MyOrders from "../pages/MyOrders/MyOrders";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
         <Route
        path="/checkout"
        element={
          <ProtectedRoute redirectTo="/register">
            <Checkout />
          </ProtectedRoute>
        }
      />
    
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/orders" element={<MyOrders />} />
    </ReactDomRoutes>
  );
}

export default Routes;
