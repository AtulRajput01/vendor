import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CSpinner, useColorModes } from '@coreui/react';
import './scss/style.scss';
import ProtectedRoute from './ProtectedRoute '

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
// const ForgotPassword = React.lazy(() => import('./views/pages/forgotpasswordrequest/ForgotPasswordRequest'));
const ResetPassword = React.lazy(() => import('./views/pages/resetpassword/ResetPassword'));
const ForgotPasswordRequest = React.lazy(() => import('./views/pages/forgotpasswordrequest/ForgotPasswordRequest'));
const Subscription = React.lazy(() => import('./Subscription'));
const ShopDetails = React.lazy(() => import('./ShopDetails'));
const SpeciesSelect = React.lazy(() => import('./SpeciesSelect'));
const Extension = React.lazy(() => import('./Extension'));
const VerifyOTP = React.lazy(() => import('./views/pages/verifyotp/verifyOTP'));
  
const AuthList = React.lazy(() => import('./AuthList'));

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme');
  const storedTheme = useSelector((state) => state.theme);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0];
    if (theme) {
      setColorMode(theme);
    }

    if (isColorModeSet()) {
      return;
    }

    setColorMode(storedTheme);
  }, []); 
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          {/* <Route exact path="/forgot-password" name="Forgot Password Page" element={<ForgotPassword />} /> */}
          <Route exact path="/reset-password/" name="Reset Password Page" element={<ResetPassword />} />
          <Route exact path="/forgot-password" name="Forgot Password Request Page" element={<ForgotPasswordRequest />} />
          <Route exact path="/verify-otp" name="verify OTP Page" element={<verifyOTP />} />     
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route exact path="/auth-list" name="Auth List" element={<AuthList />} />
          <Route exact path="/Subscription" name="Subscription Page" element={<Subscription />} />
          <Route exact path="/SpeciesSelect" name="Species Selection Page" element={<SpeciesSelect />} />
          <Route exact path="/ShopDetails" name="Shopdetails Page" element={<ShopDetails />} />
          <Route exact path="/Extension" name="Extension Page" element={<Extension />} />
          <Route exact path="/VerifyOTP" name="VerifyOTP Page" element={<VerifyOTP/>} />
          <Route element={<ProtectedRoute />}>
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
