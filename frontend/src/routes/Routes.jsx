import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import AdminRoute from '../components/AdminRoute';
import PrivateRoute from '../components/PrivateRoute';
import OrderListPage from '../pages/admin/OrderListPage';
import ProductListPage from '../pages/admin/ProductListPage';
import UserListPage from '../pages/admin/UserListPage';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import OrderDetailsPage from '../pages/OrderDetailsPage';
import PaymentPage from '../pages/PaymentPage';
import PlaceOrderPage from '../pages/PlaceOrderPage';
import ProductPage from '../pages/ProductPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';
import ShippingPage from '../pages/ShippingPage';
// import CreateProductPage from '../pages/admin/CreateProductPage';
// import UpdateProductPage from '../pages/admin/UpdateProductPage';
import AdminDashboard from '../AdminDashboard';
import AboutPage from '../pages/AboutPage';
import AdminListPage from '../pages/admin/AdminListPage';
import AdminLoginPage from '../pages/admin/AdminLoginPage';
import AdminProfilePage from '../pages/admin/AdminProfilePage';
import Dashboard from '../pages/admin/Dashboard';
import ProductFormPage from '../pages/admin/ProductFormPage';
import UpdateUserFormPage from '../pages/admin/UpdateUserFormPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ResetPasswordRequestPage from '../pages/ResetPasswordRequestPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <HomePage />
      },
      {
        path: '/product/:id',
        element: <ProductPage />
      },
      {
        path: 'about',  // ✅ Adding About Page Route
        element: <AboutPage />
      },
      {
        path: 'contact', 
        element: <ContactPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/reset-password',
        element: <ResetPasswordRequestPage />
      },
      {
        path: '/reset-password/:id/:token',
        element: <ResetPasswordPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '',
        element: <PrivateRoute />,
        children: [
          {
            path: '/shipping',
            element: <ShippingPage />
          },
          {
            path: '/payment',
            element: <PaymentPage />
          },
          {
            path: '/place-order',
            element: <PlaceOrderPage />
          },
          {
            path: '/order/:id',
            element: <OrderDetailsPage />
          },
          {
            path: '/profile',
            element: <ProfilePage />
          }
        ]
      }
    ]
  },
  {
    path: '/admin/login',
    element: <AdminLoginPage />
  },
  {
    path: '',
    element: <AdminDashboard />,
    children: [
      {
        path: '',
        element: <AdminRoute />,
        children: [
          {
            path: '/admin/dashboard',
            element: <Dashboard />
          },
          {
            path: '/admin/order-list',
            element: <OrderListPage />
          },
          {
            path: '/admin/product-list',
            element: <ProductListPage />
          },
          {
            path: '/admin/user-list',
            element: <UserListPage />
          },
          {
            path: '/admin/product/create',
            element: <ProductFormPage />
          },
          {
            path: '/admin/profile',
            element: <AdminProfilePage />
          },
          {
            path: '/admin/admin-list',
            element: <AdminListPage />
          },
          {
            path: '/admin/order/:id',
            element: <OrderDetailsPage />
          },
          {
            path: '/admin/user/update/:id',
            element: <UpdateUserFormPage />
          },
          {
            path: '/admin/product/update/:id',
            element: <ProductFormPage />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
