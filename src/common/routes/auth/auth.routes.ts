import ForgotPassword from '../../../Screens/Auth/ForgotPassword';
import Landing from '../../../Screens/Auth/Landing';
import Login from '../../../Screens/Auth/Login';
import ResetPassword from '../../../Screens/Auth/ResetPassword';
import OtpDesign from '../../../Screens/OTP/OtpDesign';
import OtpPageScreen from '../../../Screens/OTP/OtpPageScreen';
import {AuthScreens} from './auth.screens';

const AUTH_ROUTES = {
  module: 'auth',
  initialRoute: 'landing',
  routes: [
    {
      name: AuthScreens.landing.displayName,
      path: AuthScreens.landing.routeName,
      component: Landing,
      drawerMenu: false,
      options: {headerShown: false},
    },
    {
      name: AuthScreens.login.displayName,
      path: AuthScreens.login.routeName,
      component: Login,
      drawerMenu: false,
      options: {headerShown: false},
    },
    {
      name: AuthScreens.otpVerify.displayName,
      path: AuthScreens.otpVerify.routeName,
      component: OtpPageScreen,
      drawerMenu: false,
      options: {headerShown: false},
    },
    {
      name: AuthScreens.forgotPassword.displayName,
      path: AuthScreens.forgotPassword.routeName,
      component: ForgotPassword,
      drawerMenu: false,
      options: {headerShown: false},
    },
    {
      name: AuthScreens.resetPassword.displayName,
      path: AuthScreens.resetPassword.routeName,
      component: ResetPassword,
      drawerMenu: false,
      options: {headerShown: false},
    },
    {
      name: AuthScreens.otpScreen.displayName,
      path: AuthScreens.otpScreen.routeName,
      component: OtpPageScreen,
      drawerMenu: false,
      options: {headerShown: false},
    },
  ],
};

export {AUTH_ROUTES};
