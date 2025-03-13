import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminDashboard from '../AdminDashboard';
import App from '../App';
import AdminRoute from '../components/AdminRoute';
import PrivateRoute from '../components/PrivateRoute';
import AboutPage from '../pages/AboutPage';
import AdminListPage from '../pages/admin/AdminListPage';
import AdminLoginPage from '../pages/admin/AdminLoginPage';
import AdminProfilePage from '../pages/admin/AdminProfilePage';
import Dashboard from '../pages/admin/Dashboard';
import OrderListPage from '../pages/admin/OrderListPage';
import ProductFormPage from '../pages/admin/ProductFormPage';
import ProductListPage from '../pages/admin/ProductListPage';
import UpdateUserFormPage from '../pages/admin/UpdateUserFormPage';
import UserListPage from '../pages/admin/UserListPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import OrderDetailsPage from '../pages/OrderDetailsPage';
import PaymentPage from '../pages/PaymentPage';
import PlaceOrderPage from '../pages/PlaceOrderPage';
import ProductPage from '../pages/ProductPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ResetPasswordRequestPage from '../pages/ResetPasswordRequestPage';
import ShippingPage from '../pages/ShippingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'product/:id', element: <ProductPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'reset-password', element: <ResetPasswordRequestPage /> },
      { path: 'reset-password/:id/:token', element: <ResetPasswordPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },

      {
        path: '',
        element: <PrivateRoute />,
        children: [
          { path: 'shipping', element: <ShippingPage /> },
          { path: 'payment', element: <PaymentPage /> },
          { path: 'place-order', element: <PlaceOrderPage /> },
          { path: 'order/:id', element: <OrderDetailsPage /> },
          { path: 'profile', element: <ProfilePage /> }
        ]
      }
    ]
  },
  { path: '/admin/login', element: <AdminLoginPage /> },
  {
    path: '/admin',
    element: <AdminDashboard />,
    children: [
      {
        path: '',
        element: <AdminRoute />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'order-list', element: <OrderListPage /> },
          { path: 'product-list', element: <ProductListPage /> },
          { path: 'user-list', element: <UserListPage /> },
          { path: 'product/create', element: <ProductFormPage /> },
          { path: 'profile', element: <AdminProfilePage /> },
          { path: 'admin-list', element: <AdminListPage /> },
          { path: 'order/:id', element: <OrderDetailsPage /> },
          { path: 'user/update/:id', element: <UpdateUserFormPage /> },
          { path: 'product/update/:id', element: <ProductFormPage /> }
        ]
      }
    ]
  },
  { path: '*', element: <NotFoundPage /> }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
