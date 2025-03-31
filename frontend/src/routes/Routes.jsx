import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminDashboard from "../AdminDashboard";
import App from "../App";
import AdminRoute from "../components/AdminRoute";
import PrivateRoute from "../components/PrivateRoute";

// Public Pages
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ResetPasswordRequestPage from "../pages/ResetPasswordRequestPage";
import ProductListUserPage from "../pages/ProductListUserPage";

// Product & Order Pages
import CartPage from "../pages/CartPage";
import OrderDetailsPage from "../pages/OrderDetailsPage";
import PaymentPage from "../pages/PaymentPage";
import PlaceOrderPage from "../pages/PlaceOrderPage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import ShippingPage from "../pages/ShippingPage";

// Admin Pages
import AdminListPage from "../pages/admin/AdminListPage";
import AdminLoginPage from "../pages/admin/AdminLoginPage";
import AdminProfilePage from "../pages/admin/AdminProfilePage";
import Dashboard from "../pages/admin/Dashboard";
import OrderListPage from "../pages/admin/OrderListPage";
import ProductFormPage from "../pages/admin/ProductFormPage";
import ProductListPage from "../pages/admin/ProductListPage";
import UpdateUserFormPage from "../pages/admin/UpdateUserFormPage";
import UserListPage from "../pages/admin/UserListPage";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="reset-password" element={<ResetPasswordRequestPage />} />
          <Route
            path="reset-password/:id/:token"
            element={<ResetPasswordPage />}
          />
          <Route path="product-list-user" element={<ProductListUserPage />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="shipping" element={<ShippingPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="place-order" element={<PlaceOrderPage />} />
            <Route path="order/:id" element={<OrderDetailsPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route element={<AdminRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="order-list" element={<OrderListPage />} />
            <Route path="product-list" element={<ProductListPage />} />
            <Route path="user-list" element={<UserListPage />} />
            <Route path="admin-list" element={<AdminListPage />} />
            <Route path="profile" element={<AdminProfilePage />} />
            <Route path="order/:id" element={<OrderDetailsPage />} />
            <Route path="product/create" element={<ProductFormPage />} />
            <Route path="user/update/:id" element={<UpdateUserFormPage />} />
            <Route path="product/update/:id" element={<ProductFormPage />} />
          </Route>
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
