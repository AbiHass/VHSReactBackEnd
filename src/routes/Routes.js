import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import MyOrders from "../pages/MyOrders/MyOrders";
import Verify from "../pages/Verify/Verify";
import Confirmation from "../pages/Confirmation/Confirmation";

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
      <Route path="/verify" element={<Verify/>} />
      <Route path="/Confirmation" element={<Confirmation/>} />
    </ReactDomRoutes>
  );
}

export default Routes;
